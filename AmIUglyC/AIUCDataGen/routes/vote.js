var fs = require('fs');

var express = require('express');
var url = require('url');

var snoowrap = require('snoowrap')

var router = express.Router();

let rawconf = fs.readFileSync('conf.json');
let rawposts = fs.readFileSync('posts.0');

var conf = JSON.parse(rawconf);

var r = new snoowrap({
  userAgent: '0',
  clientId: conf.client_id,
  clientSecret: conf.client_secret,
  username: conf.username,
  password: conf.password
});

// Parse a list of all of the posts specified
var posts = rawposts.toString().replace(/\0/g, '').split('\r\n');

router.get('/', function(req, res, next) {
  // Redirect to use random posts if not specified
  if (req.query.l && req.query.r) {
    var c = new Object();

    c.id_0 = req.query.l;
    c.id_1 = req.query.r;

    c.link_0 = r.getSubmission(c.id_0).url;
    c.link_1 = r.getSubmission(c.id_1).url;

    Promise.all([r.getSubmission(c.id_0).expandReplies({limit: Infinity, depth: 2}),
      r.getSubmission(c.id_1).expandReplies({limit: Infinity, depth: 2})]).then((v) => {
        c.link_0 = v[0].url;
        c.link_1 = v[1].url;

        Promise.all([v[0].comments.map(a => a.body),
        v[1].comments.map(a => a.body)]).then((s) => {
          c.content_0 = s[0].join('\n\n');
          c.content_1 = s[1].join('\n\n');
          res.render('vote', c);
        });
      });
  } else {
    var id0 = posts[Math.floor(Math.random() * posts.length)];
    var id1 = posts[Math.floor(Math.random() * posts.length)];
    res.redirect("/vote?l=" + id0 + "&r=" + id1);
  }
});

module.exports = router;
