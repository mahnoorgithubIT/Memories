 import React from 'react'; 
 import {Grid , CircularProgress} from '@material-ui/core';
 import { useSelector } from 'react-redux';
  import Post from './Post/Post';
 import useStyles from './styles'; //styling file
// import { combineReducers } from 'redux';
// // import Post 
const Posts = ( {setcurrentId}) => {
    const posts = useSelector((state)=> state.posts);//using this state function we access whole global redux store
    const classes= useStyles();
    console.log(posts);


    return(//if post is not equal to length than return CircularProgress else : internal part of grid in 0 it is true otherwise false
        !posts.length ? <CircularProgress/> :(
            <Grid className={classes.container} container alignItem="stretch" spacing={3}
            >{posts.map((post) => ( 
                <Grid key = {post.id} item xs={12} sm={6}>

                    
                    <Post post = {post/*passing this post as props*/} setcurrentId={setcurrentId /*  passing same props again redux solve this overriding */}/> 
                </Grid>
            ))}</Grid>
        )

    );
}
export default Posts;