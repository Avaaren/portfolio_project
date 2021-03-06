# Generated by Django 3.0.6 on 2020-05-26 09:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название технологии')),
                ('specialization', models.CharField(max_length=50, verbose_name='Направление')),
            ],
        ),
        migrations.CreateModel(
            name='PassedMaterial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Название материала')),
                ('link', models.CharField(max_length=100, verbose_name='Сылка на материал')),
                ('type_of_material', models.CharField(choices=[('КНИГА', 'Книга'), ('СТАТЬЯ', 'Статья'), ('ВИДЕО', 'Видео'), ('КУРС', 'Курс')], default='', max_length=50, verbose_name='Тип материала')),
                ('mark', models.PositiveSmallIntegerField(default=0, verbose_name='Оценка материала')),
                ('is_favorite', models.BooleanField(default=False, verbose_name='В избранном')),
                ('technology', models.ForeignKey(default=None, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='material', to='resume.Technology')),
            ],
        ),
    ]
