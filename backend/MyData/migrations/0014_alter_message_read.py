# Generated by Django 4.2.5 on 2023-10-12 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MyData', '0013_rename_unread_message_read'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='read',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
