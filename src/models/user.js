import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 5,
        
    },
    password: {
        type: String,
        minlength: 6,
        maxLength: 30,
    },
});

export default mongoose.model('User', userSchema);