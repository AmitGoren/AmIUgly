import sys

if (len(sys.argv) != 2):
    print("Usage: python genList.py <N>")
    exit()

import praw

SUBREDDITS=['amiugly', 'teenamiugly']

r = praw.Reddit('bot1', user_agent='0')

for sub in SUBREDDITS:
    for post in r.subreddit(sub).new(limit=int(sys.argv[1])/len(SUBREDDITS)):
        print(post.id, end='\n')
