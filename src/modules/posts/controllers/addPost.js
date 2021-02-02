const mongoose = require('mongoose');
const Post = require('../postModel');

const addPost = (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    text: req.body.text,
    date: Date.now(),
    image: req.body.image,
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'post Added!',
        post: post,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Add post Failed',
        error: error,
      });
    });
};

module.exports = addPost;
