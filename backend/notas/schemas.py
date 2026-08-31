from ninja import ModelSchema
from typing import List
from .models import CourseOffering, QuotaData

class QuotaDataSchema(ModelSchema):
    class Meta:
        model = QuotaData
        fields = "__all__"

class CourseOfferingSchema(ModelSchema):
    quotas: List[QuotaDataSchema] = []

    class Meta:
        model = CourseOffering
        fields = [
            'id', 
            'institution', 
            'year_reference', 
            'course_name', 
            'campus', 
            'degree', 
            'shift', 
            'total_spots_filled', 
            'leftover_spots', 
        ]
