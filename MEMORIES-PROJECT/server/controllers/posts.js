import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req , res) => {   //request and response // / means localhost:5000 
    try{
        // console.log("kuch " + PostMessage );
        const postMessages = await  PostMessage.find(); //asynchronous action 
    //    console.log("kuch to hoja" );
        // res.status(200).json(postMessages);
        res.status(200).json(postMessages);

    }
    catch (error){
        console.log(error);
        res.status(500).json({ message: error.message});
    }
    };
export const createPost  = async (req , res) => {   
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message}) ;

    }
    };
    
    export const updatePost = async(req , res) =>{
        const { id : _id } = req.params;
        const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('NO POSTS WITH THAT ID');
        PostMessage.findByIdAndUpdate(_id , post, {  new: true});
const updatedPost =  await PostMessage.findByIdAndUpdate(_id , post, {new : true});
res.json(updatedPost);
}
export const deletePost = async(req , res) =>{
    const { id } = req.params;
   
if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('NO POSTS WITH THAT ID');
  await PostMessage.findByIdAndRemove(id);
  //console.log("APPLE");
res.json({message: 'POST DELETED SUCCESSFULLY'});
}

export const likePost = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('NO POSTS WITH THAT ID');
const post = await PostMessage.findById(id);
const updatedPost = await PostMessage.findByIdAndUpdate(id , { likeCount : post.likeCount +1}, {new: true})
res.json(updatedPost);
}