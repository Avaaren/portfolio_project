# Generated by Django 3.0.6 on 2020-05-28 07:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='passedmaterial',
            options={'verbose_name': 'Материал', 'verbose_name_plural': 'Материалы'},
        ),
        migrations.AlterModelOptions(
            name='technology',
            options={'verbose_name': 'Технология', 'verbose_name_plural': 'Технологии'},
        ),
    ]
