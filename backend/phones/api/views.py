from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from backend.phones.api.serializers import PhoneSerializer
from backend.phones.models import Phone


class PhonePagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 20


class PhoneViewSet(viewsets.ModelViewSet):
    serializer_class = PhoneSerializer
    pagination_class = PhonePagination
    queryset = Phone.objects.filter(is_purchased=False)
