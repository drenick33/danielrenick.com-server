const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: Date,
  text: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Post', PostSchema);
