import bcrypt from 'bcrypt';
import {User} from '../models/userSchema.js'

export const loginUser = function(req, res, next){
    res.json("Login User")
}


export const signUpUser = function(req, res, next){
    const userSigninInfo = req.body;

    try {
        bcrypt.hash(userSigninInfo.password, 10).then(async function(hash) {
            userSigninInfo.password = hash;
            await User.create(req.body);
            res.json("Account has been created");
        });
    } catch (error) {
        next(error);
    }
}
