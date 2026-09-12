from requests_html import HTMLSession
session = HTMLSession()
url = "https://www.cardekho.com/used-cars+in+india.html"
response = session.get(url)

#print(response.text)
with open("file3.html", "w", encoding="utf-8") as f:
    f.write(response.text)

about = response.html.find('#about', first=True)

print(about.text)