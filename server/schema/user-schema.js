import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
});

const User = mongoose.model('User', userSchema);

export default User;
