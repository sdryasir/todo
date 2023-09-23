import mongoose from 'mongoose';

const Schema = mongoose.Schema;

 const userSchema = new Schema({
    fullName:{
        type:String,
        required:[true, 'Please enter the title field'],
    },
    userName:{
        type:String,
        required:[true, 'Please enter the title field'],
        unique: true
    },
    email:{
        type: String,
        required:[true, "Please provide the valid"],
        unique: true
    },
    password:{
        type:String,
        required:[true, "Please provide the password"]
    },
    roles:{
        type:String,
        default:'user'
    },
    avatar:{
        type:String,
    }
})

export const User = mongoose.model('user', userSchema);
