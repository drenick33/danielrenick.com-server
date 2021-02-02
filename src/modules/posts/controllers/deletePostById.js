const Post = require('../postModel');

const deletePostById = (req, res) => {
  const _id = req.params.postId;
  post
    .deleteOne({ _id: _id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: 'post delete by Id Failed', error: error });
    });
};

module.exports = deletePostById;
