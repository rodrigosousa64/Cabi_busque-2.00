from django.shortcuts import render
from rest_framework import viewsets

from .models import CourseOffering, QuotaData
from .serializers import CourseOfferingSerializer, QuotaDataSerializer

# Create your views here.
class CourseOfferingViewSet(viewsets.ModelViewSet):
    queryset = CourseOffering.objects.all()
    serializer_class = CourseOfferingSerializer

class QuotaDataViewSet(viewsets.ModelViewSet):
    queryset = QuotaData.objects.all()
    serializer_class = QuotaDataSerializer