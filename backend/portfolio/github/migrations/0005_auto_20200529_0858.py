# Generated by Django 3.0.6 on 2020-05-29 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('github', '0004_auto_20200528_1312'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commits',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
