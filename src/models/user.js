import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 0
    }
}, {timestamps: true});

userSchema.pre("save", function(next) { //sử lý trước khi lưu vào db //"save" tham số thứ nhất..
    this.salt = uuidv4()
    this.password = this.encryptPassword(this.password) //k lỗi, gọi encryptPassword để mã hoá, chuyền vào password để lưu vào this.password từ model
    next(); //nhảy bước tiếp
});

userSchema.methods = { //tạo nhiều phương thức sử lý
    authenticate(password){ 
        return this.password === this.encryptPassword(password)
    },
    encryptPassword(password) { //tạo nhiều phương thức khác nhau
        if (!password) return // nếu mk k tồn tại thì return k mã hoá
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex"); //"sha256" thuật toán băm mk, digest chuỗi dc mã hoá
        } catch (error) {
            console.log(error);
        }
    }
}



export default mongoose.model('User', userSchema);