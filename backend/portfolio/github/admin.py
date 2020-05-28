from django.contrib import admin

from .models import Repository


@admin.register(Repository)
class RepositoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'number_of_commits', 'description']
