import {FETCH_ALL , CREATE , UPDATE , DELETE } from '../constants/actionType';


export default (posts = [], action) =>{
switch (action.type) {
    case FETCH_ALL:
        return action.payload;
        case DELETE:
            return posts.filter((post) =>post._id !== action.payload );

        case UPDATE:
            
            return posts.map( (post) => post._id === action.payload._id ? action.payload : post);
           
        case CREATE:
            return [...posts, action.payload];//...posts with this we are spreading all the posts and adding new post will be stored in action.payload
       

    default:
        return posts;
}
}