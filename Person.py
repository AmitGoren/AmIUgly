import re
from enum import Enum

class Gender(Enum):
    MALE = 'm'
    FEMALE = 'f'

class Person:
    def __init__(self, url):
        self.url = url

    def extractData(self, title):
        title = title.lower()

        a = re.search('\d\d', title)
        try:
            self.age = int(a.group(0))
            g = re.search(str(self.age) + '[mf]', title)
            self.gender = Gender(g.group(0)[2])
        except:
            self.age = None
            self.gender = None
        print(self.age, self.gender)
