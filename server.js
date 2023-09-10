import express from 'express';
import TodoRoutes from './routes/todo.routes.js';
import UserRoutes from './routes/user.routes.js';
import { connectDB } from './config/config.js';
import bodyParser from 'body-parser';
const app = express();

connectDB();
app.use(bodyParser());
app.use('/api', TodoRoutes) //middleware
app.use('/api', UserRoutes) //middleware

app.use((err, req, res, next) => {

    // err.message, err.name, err.code, err.errors
    console.log(err);
    let error;
    if(err.name === 'ValidationError'){ //validation error
        let e = Object.values(err.errors);
        let messags = e.map((error)=>error.message); //some more test comments
        error = messags;
    }

    if(err.code === 11000){
        let e = Object.keys(err.keyValue);
        let message = `This ${e} is already in the database, Please try different ${e}`
        error = message
    }

    res.json(error);
})

app.listen(9000, ()=>{
    console.log('Server is running on port 9000')
})









