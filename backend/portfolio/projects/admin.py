from django.contrib import admin

from .models import Project, ProjectImage


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']

@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ['image_description', 'project']    
