from django.urls import path
from . import views

app_name = 'phones'

urlpatterns = [
    path('phones/<int:pk>/',
         views.PhoneViewSet.as_view(),
         name='phones')
]
