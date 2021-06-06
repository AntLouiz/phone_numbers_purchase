from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from backend.phones.api.views import PhoneViewSet


router = DefaultRouter()
router.register('phones', PhoneViewSet, basename='order')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.core.urls', namespace='core')),
    path('api/', include(router.urls)),
]
