const Post = require('../postModel');

const getPostById = (req, res) => {
  const _id = req.params.postId;
  Post.findById(_id)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Post by Id Failed', error: error });
    });
};

module.exports = getPostById;
