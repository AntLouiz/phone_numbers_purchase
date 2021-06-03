from django.db import models


class Phone(models.Model):
    value = models.CharField(max_length=50)
    monthy_price = models.IntegerField(default=1)
    currency = models.CharField(max_length=10)
    setup_price = models.IntegerField(default=1)
