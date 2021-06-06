from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
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
    queryset = Phone.objects.filter(is_purchased=False, is_active=True)

    @action(detail=False, methods=['get'])
    def purchases(self, request):
        phones = Phone.objects.filter(is_purchased=True, is_active=True)
        page = self.paginate_queryset(phones)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(phones, many=True)
        return Response(serializer.data)

    def update(self, request, pk, partial):
        instance = get_object_or_404(Phone.objects.filter(is_purchased=True), pk=pk)
        print(request.data)
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
