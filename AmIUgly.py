import praw

import Person

AMIUGLY='amiugly'
TEENAMIUGLY='teenamiugly'

r = praw.Reddit('bot1', user_agent='0')

for s in r.subreddit(AMIUGLY).new(limit=10):
    p = Person.Person(s.url)
    p.extractData(s.title)
    print(s.title)

    for c in list(s.comments): # TODO: Change ```list(s.comments)``` to ```s.comments.list()```
        p.extractRating(c.body)
        print(c.body)
