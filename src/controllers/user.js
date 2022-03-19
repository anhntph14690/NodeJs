import User from "../models/user";
export const signup = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "User chưa được tạo!" });
    }
};
export const signin = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Đăng nhập không thành công!"
        })
    }
}

