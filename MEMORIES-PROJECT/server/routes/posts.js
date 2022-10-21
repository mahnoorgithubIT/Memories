import express from 'express';
import {getPosts ,createPost , updatePost , deletePost , likePost} from '../controllers/posts.js';
const router = express.Router();
//first route with this our app will run  posts because we added a prefix of posts
router.get('/',getPosts); //this will call getPost of posts.js in controller 
// (req , res) => {   //request and response // / means localhost:5000 
//res.send('This Works');
//});
router.post('/',createPost);
router.patch('/:id', updatePost);//patch is used for updating existing document for editing we need id
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;//now impoting this in index.js 
