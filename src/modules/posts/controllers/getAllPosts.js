const Post = require('../postModel');

const getAllPosts = (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc.length > 0) {
        const response = {
          message: 'getAllStories Success',
          count: doc.length,
          stories: doc,
        };
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: 'There are no Stories :(' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Get All Stories Failed', error: error });
    });
};

module.exports = getAllPosts;
