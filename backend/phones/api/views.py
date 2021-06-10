from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from backend.phones.api.serializers import PhoneSerializer
from backend.phones.models import Phone


class PhonePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 20


class PhoneViewSet(viewsets.ModelViewSet):
    serializer_class = PhoneSerializer
    pagination_class = PhonePagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['value']
    queryset = Phone.objects.filter(is_active=True)

    def destroy(self, request, pk):
        instance = get_object_or_404(Phone.objects.filter(is_active=True), pk=pk)
        instance.is_active = False
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
