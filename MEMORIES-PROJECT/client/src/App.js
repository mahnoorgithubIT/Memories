import React , {useEffect , useState } from 'react';
import {Container, AppBar , Typography , Grow , Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import memories from './components/images/memories.png';
import Posts from './components/Posts/Posts';
// import forms from './components/forms/forms';
import Form from './components/Form/Form';
import useStyles from './styles'; //styling file
import { getPosts } from './actions/posts';
const App = () =>{
    const [currentId ,setcurrentId] = useState(null); 
         const classes= useStyles();
    const dispatch = useDispatch();//hook now dispatching it with action
    useEffect(() =>{
        dispatch(getPosts());
    },[dispatch])  
    return(
        
        
        <Container maxwidth="lg">
            <AppBar className={classes.appBar }/* style.css part here call */ position="static" color="unherit">
                <Typography className={classes.heading} variant ="h2" align = "center">Memories</Typography>
                <img className={classes.image} src= {memories} alt='Memories' height="60"  />
                </AppBar>
                <Grow in>
                <Container>
                    <Grid className ={classes.mainContainer} container justify="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12}/*full width on extra small devices */ sm={7}>
                            <Posts setcurrentId={setcurrentId}/> {/* components are used here*/}
                            
                            </Grid> 
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setcurrentId={setcurrentId}/>
                             {/* form component is used here */}
                            </Grid> 
                    </Grid>
                </Container>
            </Grow>
            
            
    </Container>
    
    );
}
export default App;