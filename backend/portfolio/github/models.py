from django.db import models


class Repository(models.Model):
    name = models.CharField('Название репозитория', max_length=50)
    link = models.CharField('Ссылка на репозиторий', max_length=75)
    description = models.TextField('Описание репозитория', max_length=2500, default='')
    number_of_commits = models.PositiveSmallIntegerField('Количество коммитов', default=0)

    def __str__(self):
        return f'Репозиторий - {self.name}'