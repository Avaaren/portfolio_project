from celery import shared_task

from .models import Repository, Commits
from .parser import get_pinned_apps, get_total_commits


@shared_task
def update_repos_table():
    '''This function get data from github and 
    then updates list of pinned repos. Old repos
    are deleting from database.'''
    data_list = get_pinned_apps()
    database_list = Repository.objects.all()
    # If name of repository in db is equal with received data, 
    # it just update, if not equal - it deletes.
    for db_element in database_list:
        in_list = False
        for dl_element in data_list:
            if db_element.name == dl_element[0]:
                Repository.objects.filter(pk=db_element.pk).update(
                    description=dl_element[2],
                    number_of_commits=dl_element[3]
                )
                data_list.remove(dl_element)
                in_list = True
        if not in_list:
            db_element.delete()

    # In the end it is list with new data so creating new records in db
    for dl_element in data_list:
        Repository.objects.create(
            name=dl_element[0],
            link=dl_element[1],
            description=dl_element[2],
            number_of_commits=dl_element[3]
        )

@shared_task
def update_number_of_commits():
    number_of_commits = get_total_commits()
    Commits.objects.create(
        number_of_commits=number_of_commits
    )

