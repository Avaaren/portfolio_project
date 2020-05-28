import requests
from bs4 import BeautifulSoup

# from .models import Repository

BASE_URL = 'https://github.com'

def get_urls(nickname, check_type=None):

    if check_type == 'Pinned':
        html = requests.get(f'{BASE_URL}/{nickname}').text
        soup = BeautifulSoup(html, 'html.parser')

        pinned_apps_container = soup.find('div', class_='js-pinned-items-reorder-container')
        pinned_apps = pinned_apps_container.find('ol').find_all('li')
        pinned_apps_links = [BASE_URL + app.find('a').get('href') for app in pinned_apps]
        return pinned_apps_links

    if check_type == 'All':
        html = requests.get(BASE_URL + '/Avaaren?tab=repositories').text
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

    link = BASE_URL + soup.find('h1').find('strong').find('a').get('href')

    description = soup.find('span', itemprop='about').get_text().strip()

    number_of_commits = soup.find('li', class_="commits").find('span', class_="num text-emphasized").get_text().strip()

    return (name, link, description, number_of_commits)

def get_pinned_apps():
    nickname = 'Avaaren'
    check_type = 'Pinned'

    url_list = get_urls(nickname, check_type)
    for url in url_list:
        data = get_data(get_html(url))
        print(data)
        print('----------------')

def get_all_repos():
    pass

def check_for_updates():
    pass

get_pinned_apps()