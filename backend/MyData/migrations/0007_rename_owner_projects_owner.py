# Generated by Django 4.2.5 on 2023-09-08 19:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MyData', '0006_remove_projects_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projects',
            old_name='Owner',
            new_name='owner',
        ),
    ]