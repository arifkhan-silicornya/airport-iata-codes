import requests
from bs4 import BeautifulSoup
import json

import requests
name = 'Lufthansa'

YOUR_API_KEY = 'CUK/OxaIl2GZH6Dhq4smDA==xTjgDsE0Nd4AtD7B'

api_url = 'https://api.api-ninjas.com/v1/airlines?name={}'.format(name)
response = requests.get(api_url, headers={'X-Api-Key': YOUR_API_KEY})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)

def get_crawl_function(data):
    base_url = 'https://www.iata.org/en/publications/directories/code-search/?airport.search='
    url = ''.join([base_url, data])
    html = requests.get(url)
    html.encoding = 'utf-8'
    sp = BeautifulSoup(html.text, 'lxml')

    introduction = sp.select('.airportcodessearchblock .datatable tbody tr td')
    try:
        return (introduction[0].text)
    except:
        return ''


  
# Opening JSON file
# f = open('csvjson5.json')
  
# returns JSON object as 
# a dictionary
# data = json.load(f)
  
# Iterating through the json
# list
# arrr = []
# for i in data:
#     if i['municipality'] == "":
#         res = get_crawl_function(i["city_code"])
#         print(i["city_code"])
#         obj = {
#             "code" : i["city_code"],
#             "city" : res
#         }
#         arrr.append(obj)
        
# with open("sample.json", "w") as outfile:
#     json.dump(arrr, outfile)
# Closing file
# f.close()