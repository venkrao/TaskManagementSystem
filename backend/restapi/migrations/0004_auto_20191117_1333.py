# Generated by Django 2.2.7 on 2019-11-17 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0003_auto_20191117_1332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='resolvedAt',
            field=models.DateTimeField(default=None, editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='title',
            field=models.TextField(max_length=64),
        ),
    ]
