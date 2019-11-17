from django.urls import include, path
from rest_framework import routers
from .views import *

restapi_urls = routers.DefaultRouter()
restapi_urls.register('tasks', TaskViewSet)