from django.db import models


class Phone(models.Model):
    value = models.CharField(max_length=50)
    monthy_price = models.FloatField(default=1.0)
    currency = models.CharField(max_length=10)
    setup_price = models.FloatField(default=1.0)
    is_purchased = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
