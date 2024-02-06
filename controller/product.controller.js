import productModel from "../models/Product";

export class ProductController {
    createProduct = async (req, res, next) => {
        await productModel.create(req.body);
    }
}