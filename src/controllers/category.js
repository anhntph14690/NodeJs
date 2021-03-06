// fake data
import Category from "../models/category";
import Product from "../models/product";

export const list = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không có category"
        })
    }
}
export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được category"
        })
    }
}
export const read = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({category}).select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        // res.status(400).json({
        //     error: "Không tìm thấy category"
        // })
    }
}





