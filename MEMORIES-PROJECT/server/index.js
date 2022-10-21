import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();//expres
dotenv.config();
//const PORT = 5000;



app.use(bodyParser.json({ limit: "30mb", extended: true}));//sending images which can be large
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());//cors above the routes
app.use('/posts', postRoutes);//first route and we set prefix posts //express
//for connecting server application with the database
// const CONNECTION_URL = 'mongodb+srv://mahnoor:mahnoor@cluster0.7ys7gqx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;//giving port where we run localhost:5000
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })//mongoose for connecting database it accept two parameters these are for avoiding some warnings not necessary
.then(

    () => app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    
    )//then return a promise if connection is successful we call our app.listen 2 parametr 1 is port and second is call back function if app is successfully listen

.catch((error) => console.log(error.message));//if connection is not successfull this part executed
// after that the script we add in script run it with start mongoose.set('useFindAndModify', false); //this is used for avoiding warnings
