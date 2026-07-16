from django.shortcuts import render
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Prefetch

from .models import CourseOffering, QuotaData
from .serializers import CourseOfferingSerializer, QuotaDataSerializer

# Create your views here.
class CourseOfferingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CourseOffering.objects.all().prefetch_related('quotas')
    serializer_class = CourseOfferingSerializer

class QuotaDataViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = QuotaData.objects.all()
    serializer_class = QuotaDataSerializer

class BuscQuotaDataViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CourseOffering.objects.all()
    serializer_class = CourseOfferingSerializer
    filterset_fields = '__all__'
    search_fields = []

    def get_queryset(self):
        queryset = super().get_queryset()
        
        escola_publica = self.request.query_params.get('escola_publica')
        renda_sm = self.request.query_params.get('renda_sm')
        raca = self.request.query_params.get('raca')
        pcd = self.request.query_params.get('pcd')
        # Aceita 'curso', 'search' ou 'course_name' (que é o padrão do form do Django)
        curso = self.request.query_params.get('curso') or self.request.query_params.get('search') or self.request.query_params.get('course_name')
        
        # Filtra pelo nome do curso diretamente em CourseOffering
        if curso:
            queryset = queryset.filter(course_name__icontains=curso)
        
        # Constrói os filtros para as Cotas (QuotaData)
        filtros_cotas = {}

        if escola_publica is not None:
            if escola_publica.lower() != 'true':
                filtros_cotas['requer_escola_publica'] = False

        if renda_sm is not None:
            try:
                if float(renda_sm.replace(',', '.')) > 1.0:
                    filtros_cotas['requer_renda_baixa'] = False
            except ValueError:
                pass

        if raca is not None:
            raca_lower = raca.lower()
            if raca_lower not in ['preta', 'parda', 'indigena']:
                filtros_cotas['is_ppi'] = False
            if raca_lower != 'quilombola':
                filtros_cotas['is_quilombola'] = False

        if pcd is not None:
            if pcd.lower() != 'true':
                filtros_cotas['is_pcd'] = False
                filtros_cotas['is_adicional_pcd'] = False

        # Aplica os filtros nas cotas
        quota_queryset = QuotaData.objects.all()
        if filtros_cotas:
            quota_queryset = quota_queryset.filter(**filtros_cotas)
            # Retorna apenas os cursos que possuem ao menos uma cota elegível
            queryset = queryset.filter(quotas__in=quota_queryset).distinct()

        # Faz o Prefetch: aninha as cotas no JSON do curso, mas apenas as cotas filtradas!
        queryset = queryset.prefetch_related(
            Prefetch('quotas', queryset=quota_queryset)
        )

        return queryset