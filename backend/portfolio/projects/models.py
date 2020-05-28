from django.db import models


class Project(models.Model):
    name = models.CharField('Название проекта', max_length=50)
    description = models.TextField('Описание проекта', max_length=2000)
    link = models.CharField('Ссылка на проект', max_length=100)

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"

    def __str__(self):
        return f'Project {self.name}'


class ProjectImage(models.Model):
    image = models.ImageField('Скриншот проекта')
    image_description = models.CharField('Описание скриншота', max_length=100)
    project = models.ForeignKey('Project', related_name='image', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Картинка"
        verbose_name_plural = "Картинки"

    def __str__(self):
        return f'{self.pk} - for {self.project.name}'