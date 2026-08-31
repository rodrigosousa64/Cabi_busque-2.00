from ninja import NinjaAPI, Query, Schema
from typing import List, Optional
from django.db.models import Prefetch
from .models import CourseOffering, QuotaData
from .schemas import CourseOfferingSchema, QuotaDataSchema

api = NinjaAPI(title="Capi Busque API", version="1.0.0", description="Documentação da API do Capi Busque")

from vagas_sobrando.api import router as vagas_sobrando_router
api.add_router("/vagas-sobrando", vagas_sobrando_router)
@api.get("/courses-offerings", response=List[CourseOfferingSchema])
def list_courses(request):
    return CourseOffering.objects.all().prefetch_related('quotas')

@api.get("/quotas", response=List[QuotaDataSchema])
def list_quotas(request):
    return QuotaData.objects.all()

class BuscQuotasQuery(Schema):
    curso: Optional[str] = None
    search: Optional[str] = None
    course_name: Optional[str] = None
    escola_publica: Optional[str] = None
    renda_sm: Optional[str] = None
    raca: Optional[str] = None
    pcd: Optional[str] = None
    cidade: Optional[str] = None

import unicodedata

def remove_accents(input_str):
    if not input_str:
        return ""
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])

@api.get("/busc-quotas", response=List[CourseOfferingSchema])
def busc_quotas(request, filters: BuscQuotasQuery = Query(...)):
    queryset = CourseOffering.objects.all()
    
    curso = filters.curso or filters.search or filters.course_name
    
    if curso:
        curso_clean = " ".join(curso.strip().split())
        if curso_clean:
            search_normalized = remove_accents(curso_clean).lower()
            
            # Buscando apenas id e nome para ser super leve
            all_courses = CourseOffering.objects.only('id', 'course_name')
            matching_ids = [
                c.id for c in all_courses 
                if search_normalized in remove_accents(c.course_name).lower()
            ]
            queryset = queryset.filter(id__in=matching_ids)
            
    cidade = filters.cidade
    if cidade:
        cidade_clean = " ".join(cidade.strip().split())
        if cidade_clean:
            cidade_normalized = remove_accents(cidade_clean).lower()
            
            all_campuses = CourseOffering.objects.only('id', 'campus')
            matching_ids_campus = [
                c.id for c in all_campuses
                if cidade_normalized in remove_accents(c.campus).lower()
            ]
            queryset = queryset.filter(id__in=matching_ids_campus)
        
    filtros_cotas = {}

    if not (filters.escola_publica and filters.escola_publica.lower() == 'true'):
        filtros_cotas['requer_escola_publica'] = False

    tem_renda_baixa = False
    if filters.renda_sm is not None:
        try:
            if float(filters.renda_sm.replace(',', '.')) <= 1.0:
                tem_renda_baixa = True
        except ValueError:
            pass
            
    if not tem_renda_baixa:
        filtros_cotas['requer_renda_baixa'] = False

    raca_lower = filters.raca.lower() if filters.raca else ""
    if raca_lower not in ['preta', 'parda', 'indigena']:
        filtros_cotas['is_ppi'] = False
    if raca_lower != 'quilombola':
        filtros_cotas['is_quilombola'] = False

    if not (filters.pcd and filters.pcd.lower() == 'true'):
        filtros_cotas['is_pcd'] = False
        filtros_cotas['is_adicional_pcd'] = False

    quota_queryset = QuotaData.objects.all()
    if filtros_cotas:
        quota_queryset = quota_queryset.filter(**filtros_cotas)
        queryset = queryset.filter(quotas__in=quota_queryset).distinct()

    queryset = queryset.prefetch_related(
        Prefetch('quotas', queryset=quota_queryset)
    )

    return queryset
