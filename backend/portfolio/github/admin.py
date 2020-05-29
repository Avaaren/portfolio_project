from django.contrib import admin

from .models import Repository, Commits


@admin.register(Repository)
class RepositoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'number_of_commits', 'description']

@admin.register(Commits)
class CommitsAdmin(admin.ModelAdmin):
    list_display = ['date', 'number_of_commits']
