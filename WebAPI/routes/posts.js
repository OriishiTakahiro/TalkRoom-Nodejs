const express = require('express');
const Post = require('../mongodb/mongo_util.js')
const router = express.Router();

router.get('/', (req, res, next) => {
  Post.find( (err, posts) => {
    if(err) {
      console.log(err);
      res.status(500).send("Sorry servers are not working well.");
    }
    res.header('Content-Type', 'application/json; charset=utf-8')  ;
    res.send(posts);
  });
});

router.post('/new', (req, res, next) => {
  const reqJson = req.body;
  console.log(reqJson);
  // insert new post to database
  let post = new Post();
  post.name = reqJson.name;
  post.comment = reqJson.comment;
  post.save( (err) =>  {
    if(err) {
      console.log(err);
      res.status(500);
      res.send("Sorry servers are not working well.");
    }
  });
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send("Your comment is uploaded!");
});

module.exports = router;
