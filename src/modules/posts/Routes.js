const express = require('express');
const router = express.Router();
const getAllPosts = require('./controllers/getAllPosts');
const getPostById = require('./controllers/getPostById');
const searchPosts = require('./controllers/searchPosts');
const deletePostById = require('./controllers/deletePostById');
const addPost = require('./controllers/addPost');
const editPost = require('./controllers/editPost');

//These routes start at /Posts/

//Get Methods
router.get('/', getAllPosts);
router.get('/:postId', getPostById);

//Post methods
router.post('/search', searchPosts);
router.post('/', addPost);

//Patch methods
router.patch('/:postId', editPost);

//Delete methods
router.delete('/:postId', deletePostById);

module.exports = router;
