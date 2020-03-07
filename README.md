# AmIUgly
Automatically download posts from Reddit's [r/amiugly](https://www.reddit.com/r/amiugly/) and [r/teenamiugly](https://www.reddit.com/r/teenamiugly/) along with age, gender, picture and numerical rating from the comments. Intended for use with mPretty. 

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

### Step 2 - Generate the Posts List
First, we need to generate a simple file containing a list of Reddit posts IDs. In Order to do that, you can run `python genList.py 5000 >> posts.0`. This will save the IDs of the 2500 newest posts (because there are 2 defined subreddits) in all of the defined subreddits - a total of 5000 posts to the file `posts.0`.

### Step 3 - Generate the Traning Data For the Text Classifier
You can use an already existing training data if you don't want to train it all by yourself.
#### Step 3.1 - Generate the Posts List
Again, we need to generate a simple file containing a list of Reddit posts IDs. You can use file generated in the previous step or generate a new one with less (or more) posts using the same command as above. Generate the new file to `AmIUgly/AmIUglyC/AIUCDataGen/posts.0`.
#### Step 3.2 - Create a Results File
Just create an empty file called `AmIUgly/AmIUglyC/AIUCDataGen/results.0` (you probably want to use `touch` for that).
#### Step 3.3 - Run the Server
Change directory into `AmIUgly/AmIUglyC/AIUCDataGen/` and run `npm start`.
Now you need to classify which posts contains a prettier person, this will help generating the training data.
This is a long and repeating proccess, so you might want to do a LAN party for that!!!
