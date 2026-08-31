from typing import Optional
from notas.schemas import CourseOfferingSchema, QuotaDataSchema

class CourseSobrasSchema(CourseOfferingSchema):
    min_quota: Optional[QuotaDataSchema] = None
    max_quota: Optional[QuotaDataSchema] = None
