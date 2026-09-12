import time
import csv
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_argument("--headless")  # Run in background
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920,1080")
chrome_options.add_argument("--no-sandbox")


driver = webdriver.Chrome(options=chrome_options)

url = "https://www.cardekho.com/used-cars+in+india"
driver.get(url)

try:
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "gsc_col-xs-7"))
    )
except:
    print("Listings did not load properly.")
    driver.quit()
    exit()

driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(3)

car_cards = driver.find_elements(By.CLASS_NAME, "gsc_col-xs-7")
print(f"Found {len(car_cards)} car listings")

data = []

for car in car_cards:
    try:
        title = car.find_element(By.CLASS_NAME, "carName").text.strip()
        price = car.find_element(By.CLASS_NAME, "price").text.strip()

        details = car.find_elements(By.CLASS_NAME, "icon-holder")
        year = details[0].text.strip() if len(details) > 0 else ""
        mileage = details[1].text.strip() if len(details) > 1 else ""
        fuel = details[2].text.strip() if len(details) > 2 else ""
        transmission = details[3].text.strip() if len(details) > 3 else ""

        location = car.find_element(By.CLASS_NAME, "loc").text.strip()
        seller_type = "Dealer" if "dealer" in car.text.lower() else "Individual"

        data.append({
            "Title": title,
            "Price": price,
            "Year": year,
            "Mileage": mileage,
            "Fuel": fuel,
            "Transmission": transmission,
            "Location": location,
            "Seller Type": seller_type
        })

    except Exception as e:
        print("Skipping one listing due to error:", e)
        continue

df = pd.DataFrame(data)
df.to_csv("parsed_cardekho_data.csv", index=False)
print("Scraping complete. Data saved to parsed_cardekho_data.csv")

driver.quit()
