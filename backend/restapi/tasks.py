from celery import shared_task


@shared_task
def add_to_queue(incoming_task):
    print("{} has been added to queue.".format(incoming_task))