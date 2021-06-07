# Generated by Django 3.2.4 on 2021-06-05 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0002_alter_phone_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='phone',
            name='is_purchased',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='phone',
            name='monthy_price',
            field=models.FloatField(default=1.0),
        ),
        migrations.AlterField(
            model_name='phone',
            name='setup_price',
            field=models.FloatField(default=1.0),
        ),
    ]