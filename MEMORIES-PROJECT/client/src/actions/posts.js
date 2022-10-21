import * as api from '../api';//we are importing everything from the action api
import {FETCH_ALL , CREATE , UPDATE , DELETE } from '../constants/actionType';
// we can also fetch this from api folder  eg api.fetchPosts()
//Action Creator
export const getPosts = () => async(dispatch) => {

    try {
        console.log("IDHR HI H ");
        const { data } = await api.fetchPosts();
        console.log("car 5 data" + data);
        dispatch( {type : FETCH_ALL, payload: data});// now we are successfully dispatching data from backend
        console.log("car 6");
    } catch (error) {
        console.log(error.message);
        
    }
    
}
export const createPost = (post) => async(dispatch) =>{
    try {
      const{ data }  = await api.createPost(post);
      dispatch({type:  CREATE , payload: data});
      
    } catch (error) {
    console.log(error)    
    }
}

export const updatePost = (id , post) => async(dispatch) =>{
    try {
      const { data }  = await api.updatePost(id , post);
      dispatch({type:  UPDATE , payload: data});
      
    } catch (error) {
    console.log(error)    
    }
}
export const deletePost = (id) => async(dispatch) => {
try {
     await api.deletePost(id);
     dispatch({type :DELETE,payload:id});

} catch (error) {
    console.log(error);
}
}
export const likePost = (id ) => async(dispatch) =>{
    try {
      const { data }  = await api.likePost(id );
      dispatch({type: UPDATE , payload: data});
      
    } catch (error) {
    console.log(error)    
    }
}




