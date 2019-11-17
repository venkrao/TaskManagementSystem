# Create your views here.

from rest_framework import viewsets
from rest_framework import status
from .serializers import *
from .models import *
from .tasks import add_to_queue


class TaskViewSet(viewsets.ModelViewSet):
    """ Endpoint to view and update Tasks """
    queryset = Task.objects.all().order_by('dueDate', 'priority')
    serializer_class = TaskSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        if response.status_code == status.HTTP_201_CREATED:
            print("Adding task to queue..")
            # Add the task to queue for further processing.
            add_to_queue.delay(request.data)

        return response
