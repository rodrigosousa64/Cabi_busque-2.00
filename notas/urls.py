from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers
from .views import CourseOfferingViewSet, QuotaDataViewSet

router = DefaultRouter(trailing_slash=False)
router.register(r'courses-offerings', CourseOfferingViewSet, basename='course-offering')
router.register(r'quotas', QuotaDataViewSet, basename='quota')

courses_router = routers.NestedDefaultRouter(router, r'courses-offerings', lookup='course_offering')
courses_router.register(r'quotas', QuotaDataViewSet, basename='course-offering-quotas')

urlpatterns = router.urls + courses_router.urls
