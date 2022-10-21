  import React , { useState ,  useEffect } from 'react' ;
 import { TextField, Button, Typography ,Paper } from '@material-ui/core';
import useStyles from './styles'; //styling file
import FileBase from 'react-file-base64';
import { createPost , updatePost } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { updatePost } from '../../../../server/controllers/posts';
 //import { createPost } from '../../api';

 //Getiing current id of the post for posts in controller
const Form = ({currentId, setcurrentId}) => {
  const post = useSelector((state)=> currentId ? state.posts.find((p) => p._id === currentId) : null);
     const classes= useStyles();
     const dispatch = useDispatch();
     const [postData , setPostData] = useState({
        creator : '' , title: '', message:' ', tags:' ', selectedFile: '' });
     
        //using useEffect here 
        useEffect(() => {
          if(post) setPostData(post);//if post exist than setPostData to post which have updated values
        } , [post]);// 2 parameter 1: call backfunction 2: dependency array
        //onsubmit function
        const handleSubmit = (e) => { 
      e.preventDefault();
      if (currentId) {
        dispatch(updatePost(currentId , postData));
      }
      else{
      dispatch(createPost(postData));
     }
     clear();
     
    }
     
     const clear = () =>{
      setcurrentId(null);
      setPostData({
        creator:" " , 
        title: " " , 
        message: " " , 
        tags: " " , 
        selectedFile: " "
      })
    }

    return(
        <>
            <Paper className = {classes.paper}>
            <form autoComplete= "off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField
             name='Creator'
              variant='outlined'  
                label='Creator' 
                fullWidth
                value={postData.creator}//state(postData) All the data will be stored here using useState property
                onChange={(e) => setPostData({...postData , creator: e.target.value})//event which target value

                } />
                <TextField
             name='title'
              variant='outlined'  
                label='title' 
                fullWidth
                value={postData.title}//state(postData) All the data will be stored here using useState property
                onChange={(e) => setPostData({...postData , title: e.target.value})//event which target value

                } />
               
                <TextField
             name='message'
              variant='outlined'  
                label='message' 
                fullWidth
                value={postData.message}//state(postData) All the data will be stored here using useState property
                onChange={(e) => setPostData({...postData , message: e.target.value})//event which target value

                } />
                <TextField
             name='tags'
              variant='outlined'  
                label='tags' 
                fullWidth
                value={postData.tags}//state(postData) All the data will be stored here using useState property
                onChange={(e) => setPostData({...postData , tags: e.target.value.split(',')})//event which target value "," it is used to seperate it by array

                } />
                <div className={classes.fileInput}>
                <FileBase
                type = 'file'
                multiple={false}
                onDone={({base64}) => setPostData({ ...postData , selectedFile:base64})}/>
                </div>
                <Button  variant="contained"color="secondary" size="large" type="submit" fullWidth >Submit </Button>
                
                <Button className={classes.buttonSubmit}  variant="contained" color="primary" size="small"  onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
            
        
            </>
        );
     }
 export default Form;