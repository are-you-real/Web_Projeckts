# Generated by Django 3.2.1 on 2021-05-05 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Repo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullName', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000)),
                ('cloneUrl', models.CharField(max_length=100)),
                ('stars', models.IntegerField()),
            ],
        ),
    ]
