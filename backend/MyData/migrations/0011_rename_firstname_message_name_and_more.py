# Generated by Django 4.2.5 on 2023-09-27 21:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MyData', '0010_education_country'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='firstname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='message',
            old_name='lastname',
            new_name='subject',
        ),
    ]
