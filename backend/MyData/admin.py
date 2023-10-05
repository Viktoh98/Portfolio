from django.contrib import admin
from django.utils.html import format_html
from .models import *

admin.site.register(Figure)
admin.site.register(Projects)
admin.site.register(SocialLink)
admin.site.register(Testimonial)
admin.site.register(Skillset)
admin.site.register(Contact)


class MessageAdmin(admin.ModelAdmin):
    list_display = ['title', 'read']


admin.site.register(Message, MessageAdmin)


admin.site.register(Education)
