from rest_framework import serializers
from backend.phones.models import Phone


class PhoneSerializer(serializers.ModelSerializer):
    monthyPrice = serializers.FloatField(source='monthy_price')
    setupPrice = serializers.FloatField(source='setup_price')

    class Meta:
        model = Phone
        fields = ['id',
                  'value',
                  'monthyPrice',
                  'currency',
                  'setupPrice']
