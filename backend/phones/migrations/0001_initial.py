# Generated by Django 3.2.4 on 2021-06-03 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=10)),
                ('monthy_price', models.IntegerField(default=1)),
                ('currency', models.CharField(max_length=10)),
                ('setup_price', models.IntegerField(default=1)),
            ],
        ),
    ]
