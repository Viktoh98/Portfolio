# Generated by Django 4.2.5 on 2023-09-08 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyData', '0002_contact_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='Github_URL',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='projects',
            name='Live_URL',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='Position',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
