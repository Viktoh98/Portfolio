# Generated by Django 4.2.5 on 2023-09-08 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyData', '0003_alter_projects_github_url_alter_projects_live_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonial',
            name='ImageURL',
            field=models.ImageField(default='images/placeholder.jpeg', upload_to='images/'),
        ),
    ]
