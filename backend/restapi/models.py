from django.db import models
from datetime import date
from django.core.exceptions import ValidationError

# Create your models here.
"""
class Priority(models.Model):
    id = models.IntegerField(primary_key=True)
    priority = models.CharField(unique=True, max_length=12)


class Status(models.Model):
    id = models.IntegerField(primary_key=True)
    status = models.CharField(unique=True, max_length=12)
"""

def past_date(date):
    if date < date.today():
        raise ValidationError("{} is from the past. Please choose a future date.".format(date))


class Task(models.Model):
    uuid = models.IntegerField(unique=True)
    createdAt = models.DateTimeField(auto_now=True)
    updatedAt = models.DateTimeField(auto_now=True)
    dueDate = models.DateField(default=date.today, editable=True)
    remindMeDate = models.DateField(null=True, editable=True, validators=[past_date]) # allow empty values when no reminders are needed.
    resolvedAt = models.DateTimeField(default=None, null=True, editable=False)
    title = models.TextField(max_length=64)
    description = models.TextField(max_length=1024)

    priority_choices = [
        (1, "High"),
        (2, "Medium"),
        (3, "Low"),
    ]

    status_choices = [
        (1, "Open"),
        (2, "In-progress"),
        (3, "Resolved"),
    ]

    priority = models.CharField(max_length=1, choices=priority_choices, default=3)
    status = models.CharField(max_length=1, choices=status_choices)