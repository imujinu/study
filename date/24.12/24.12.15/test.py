from urllib.request import urlopen
from bs4 import BeautifulStoneSoup

response = urlopen(https://cu.bgfretail.com/event/plus.do?category=event&depth2=1&sf=N)
soup : BeautifulSoup(response, "html.parser")                                      

value = soup.find("", {""}:) 
print(value)