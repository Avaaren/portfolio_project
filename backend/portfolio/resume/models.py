from django.db import models


class PassedMaterial(models.Model):
    TYPE_CHOICES = (
        ('КНИГА', 'Книга'),
        ('СТАТЬЯ', 'Статья'),
        ('ВИДЕО', 'Видео'),
        ('КУРС', 'Курс'),
    )
    name = models.CharField('Название материала', max_length=50)
    link = models.CharField('Сылка на материал', max_length=100)
    type_of_material = models.CharField('Тип материала',
                                        max_length=50,
                                        choices=TYPE_CHOICES,
                                        default='')
    mark = models.PositiveSmallIntegerField('Оценка материала', default=0)
    technology = models.ForeignKey('Technology',
                                   related_name='material',
                                   on_delete=models.SET_DEFAULT,
                                   default=None)
    is_favorite = models.BooleanField('В избранном', default=False)
    
    class Meta:
        verbose_name = "Материал"
        verbose_name_plural = "Материалы"

    def __str__(self):
        return f'{self.name}'


class Technology(models.Model):
    name = models.CharField('Название технологии', max_length=50)
    specialization = models.CharField('Направление', max_length=50)

    class Meta:
        verbose_name = "Технология"
        verbose_name_plural = "Технологии"

    def __str__(self):
        return f'{self.name} for {self.specialization}'
