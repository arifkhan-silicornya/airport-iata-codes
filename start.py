import requests
from bs4 import BeautifulSoup
import json

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
f = open('csvjson5.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
  
# Iterating through the json
# list
arrr = []
for i in data:
    if i['municipality'] == "":
        res = get_crawl_function(i["city_code"])
        print(i["city_code"])
        obj = {
            "code" : i["city_code"],
            "city" : res
        }
        arrr.append(obj)
        
with open("sample.json", "w") as outfile:
    json.dump(arrr, outfile)
# Closing file
f.close()