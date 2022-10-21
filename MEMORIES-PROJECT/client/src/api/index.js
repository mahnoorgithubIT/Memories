import axios from 'axios';

const url = 'http://localhost:5000/posts';//this pointing to our backend route

export const fetchPosts = () => axios.get(url);//axious get kry url c
//for posting new data 
export const createPost = (newPost) => axios.post(url , newPost);
export const updatePost = (id , updatedPost) => axios.patch(`${url}/${id} ` , updatedPost);
export const deletePost = (id ) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);