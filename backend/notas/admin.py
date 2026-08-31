from django.contrib import admin
from .models import CourseOffering, QuotaData, PerfilCandidatoDB

# Register your models here.
admin.site.register(CourseOffering)
admin.site.register(QuotaData)
admin.site.register(PerfilCandidatoDB)