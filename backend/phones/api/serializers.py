from rest_framework import serializers
from backend.phones.models import Phone


class PhoneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Phone
        fields = ['id',
                  'value',
                  'monthy_price',
                  'currency',
                  'setup_price']
