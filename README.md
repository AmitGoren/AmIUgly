# AmIUgly
Automatically download posts from Reddit's [r/amiugly](https://www.reddit.com/r/amiugly/) and [r/teenamiugly](https://www.reddit.com/r/teenamiugly/) along with age and gender, intended for use with mPretty.

## Usage
### Step 1 - Configure Access to Reddit
Create a file named `praw.ini` under `AmIUgly/` with the following syntax:
```
[bot1]
client_id=MyClientId
client_secret=MyClientSecret
password=MyRedditAccountPssword
username=MyRedditUsername
```
You can get the `client_id` and the `client_secret` [here](https://www.reddit.com/prefs/apps), you should choose the script option.
You also need to create a similar file under `AmIUgly/AmIUglyC/AIUCDataGen/` named `conf.json` with the following syntax:
```
{
  "client_id": "MyClientId",
  "client_secret": "MyClientSecret",
  "password": "MyRedditAccountPssword",
  "username": "MyRedditUsername"
}
```

### Step 2 - Generate a Posts List
First, we need to generate a simple file containing a list of Reddit posts IDs. In Order to do that, you can run `python genList.py 2000 >> posts.0`. This will save the IDs of the 1000 newest posts (because there are 2 defined subreddits) in all of the defined subreddits - a total of 2000 posts to the file `posts.0`.
Now you need to move the generated file to be under `AmIUgly/AmIUglyC/AIUCDataGen/`.
