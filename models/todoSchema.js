import mongoose from 'mongoose';

const Schema = mongoose.Schema;

 const TodoSchema = new Schema({
    title:{
        type:String,
        required:[true, 'Please enter the title field'],
        minLength:[5, 'Please enter atleast 5 characters in the title field'],
        maxLength:[15, "15 characters are allowed in the title field"],
        unique: true
    },
    description:{
        type:String,
        required:[true, 'Please enter the title field'],
        minLength:[5, 'Please enter atleast 5 characters in the title field'],
        maxLength:[15, "15 characters are allowed in the description field"],
        unique: true
    },
    status:{
        type: Boolean,
        required:[true, "Please provide the value"]
    }
})

export const Todo = mongoose.model('todo', TodoSchema);
