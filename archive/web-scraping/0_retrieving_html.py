import requests
import time
from fake_useragent import UserAgent

url = "https://www.cardekho.com/used-cars+in+india.html"

session = requests.Session()

headers = {
    'User-Agent': UserAgent().random,   
    'Accept-Language': 'en-US,en;q=0.9' ,
    'Accept-Encoding': 'gzip,deflate,br',
    'Connection': 'keep-alive',
     'Referer': 'www.google.com'
}
time.sleep(2)  
response = session.get(url)
response = session.get(url, headers=headers, timeout=10)

#print(response.text)

with open("file.html", "w", encoding="utf-8") as f:
    f.write(response.text)
