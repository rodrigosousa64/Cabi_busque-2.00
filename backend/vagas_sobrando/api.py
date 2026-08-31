from ninja import Router
from typing import List
from notas.models import CourseOffering
from .schemas import CourseSobrasSchema

router = Router(tags=["Vagas Sobrando"])

@router.get("/", response=List[CourseSobrasSchema])
def sobras_view(request):
    cursos_com_sobra = CourseOffering.objects.filter(
        leftover_spots__gt=0
    ).prefetch_related('quotas').order_by('-leftover_spots')
    
    resultados = []
    
    for curso in cursos_com_sobra:
        quotas = curso.quotas.all()
        curso.min_quota = None
        curso.max_quota = None
        
        if quotas:
            valid_min = [q for q in quotas if q.previous_cutoff is not None and q.previous_cutoff > 0]
            valid_max = [q for q in quotas if q.historical_max_score is not None and q.historical_max_score > 0]
            
            if valid_min:
                curso.min_quota = min(valid_min, key=lambda q: q.previous_cutoff)
            if valid_max:
                curso.max_quota = max(valid_max, key=lambda q: q.historical_max_score)
                
        resultados.append(curso)

    return resultados
