from django.db import models


class Repository(models.Model):
    name = models.CharField('Название репозитория', max_length=50)
    link = models.CharField('Ссылка на репозиторий', max_length=75)
    description = models.TextField('Описание репозитория', max_length=2500, default='')
    number_of_commits = models.PositiveSmallIntegerField('Количество коммитов', default=0)

    class Meta:
        verbose_name = "Репозиторий"
        verbose_name_plural = "Репозитории"

    def __str__(self):
        return f'Репозиторий - {self.name}'

class Commits(models.Model):
    date = models.DateField(auto_now_add=True)
    number_of_commits = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name = "Коммит"
        verbose_name_plural = "Коммиты"

    def __str__(self):
        return f'Коммитов - {self.number_of_commits} - {self.date}'
