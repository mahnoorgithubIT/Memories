import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
title:String,
message:String,
creator: String,
tags:[String],
 selectedFile:String,
 likeCount:{
    type: Number,
    default:0
 },
 createdAt:{
    type: Date,
    default:new Date()
 },//this all is schema
});// mongoose make documents so for each posts we have these following things

const PostMessage = mongoose.model('PostMessage', postSchema);//for making this schema in model 
export default PostMessage;