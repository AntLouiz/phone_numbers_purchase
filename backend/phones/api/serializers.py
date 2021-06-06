from rest_framework import serializers
from backend.phones.models import Phone


class PhoneSerializer(serializers.ModelSerializer):
    monthyPrice = serializers.FloatField(source='monthy_price')
    setupPrice = serializers.FloatField(source='setup_price')
    isPurchased = serializers.BooleanField(write_only=True, source='is_purchased')
    isActive = serializers.BooleanField(write_only=True, source='is_active')

    class Meta:
        model = Phone
        fields = ['id',
                  'value',
                  'monthyPrice',
                  'currency',
                  'setupPrice',
                  'isPurchased',
                  'isActive']
