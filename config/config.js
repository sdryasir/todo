import mongoose from 'mongoose';

export const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/todo-test').then(() => console.log('Connected!'));
}