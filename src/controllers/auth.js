import User from "../models/user";

export const register = async (req, res) => {
    const {name, email, password } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.status(400).json({
                message: "Tai khoan da ton tai"
            })
        }
        const user = await new User({name, email, password}).save();
        res.json({
            user: {
                _id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Dang ky that bai!"
        })
    }
}
export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}.exec());
        if(!User){
            res.status(400).json({
                message: "Email khong ton tai"
            })
        }
        if(!User.authenticate(password)){
            res.status(400).json({
                message: "Password khong dung"
            })
        }
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name

            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Dang nhap that bai"
        })

    }
}