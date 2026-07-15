from rest_framework import serializers
from .models import CourseOffering, QuotaData, PerfilCandidatoDB

class QuotaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotaData
        fields = '__all__'

class CourseOfferingSerializer(serializers.ModelSerializer):
    quotas = QuotaDataSerializer(many=True, read_only=True)

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
            'quotas'
        ]
