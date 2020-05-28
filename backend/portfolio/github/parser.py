import requests
from bs4 import BeautifulSoup

from .models import Repository

BASE_URL = 'https://github.com'

def get_urls(url, check_type=None):

    if check_type == 'Pinned':
        html = requests.get(BASE_URL).text
        soup = BeautifulSoup(html, 'html.parser')

        pinned_apps_container = soup.find('div', class_='js-pinned-items-reorder-container')
        pinned_apps = pinned_apps_container.find('ol').find_all('li')
        pinned_apps_links = [BASE_URL + app.find('a').get('href') for app in pinned_apps]
        return pinned_apps_links

    if check_type == 'All':
        html = requests.get(BASE_URL.join('/Avaaren?tab=repositories')).text
        soup = BeautifulSoup(html, 'html.parser')

        repositories_container = soup.find('div', id='user-repositories-list')
        repositories = repositories_container.find.find('ul').find_all('li')
        repositories_links = [BASE_URL + rep.find('a').get('href') for rep in repositories]
        return repositories_links

def get_html(url):
    response = requests.get(url)
    return response.text

def get_data(html):
    soup = BeautifulSoup(html, 'html.parser')

    name = soup.find('h1').find('strong').find('a').get_text()

    link = BASE_URL.join(soup.find('h1').find('strong').find('a').get('href'))

    description = soup.find('span', itemprop='about')

    number_of_commits = soup.find('li', class_="commits").find('span', class_="num text-emphasized").get_text()


def get_pinned_apps():
    pass

def get_all_repos():
    pass

def check_for_updates():
    pass
