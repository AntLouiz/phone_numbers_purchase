# Generated by Django 3.2.4 on 2021-06-05 23:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0003_auto_20210605_1347'),
    ]

    operations = [
        migrations.AddField(
            model_name='phone',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
