from django.contrib import admin

from .models import Technology, PassedMaterial

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'specialization']

@admin.register(PassedMaterial)
class PassedMaterialAdmin(admin.ModelAdmin):
    list_display = ['name', 'type_of_material', 'mark', 'technology', 'is_favorite']