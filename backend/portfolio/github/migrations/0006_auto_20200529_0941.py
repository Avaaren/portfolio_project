# Generated by Django 3.0.6 on 2020-05-29 09:41

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('github', '0005_auto_20200529_0858'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commits',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 5, 29, 9, 41, 22, 380630, tzinfo=utc)),
        ),
    ]