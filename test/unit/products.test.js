import {ProductController} from "../../controller/product.controller";
import productModel from "../../models/Product";
import httpMocks from 'node-mocks-http';
import newProd from '../data/new-product.json'

describe('Product Controlller Create', () => {
    let controller, req, res, next;
    beforeEach(() => {
        controller = new ProductController();
        productModel.create = jest.fn();
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
    });

    //it 대신 test 도 가능
    it("createProduct 는 function", () => {
        expect(typeof controller.createProduct).toBe("function");
    })

    it('should call productModel.create', () => {
        req.body = newProd;
        controller.createProduct(req, res, next);
        expect(productModel.create).toBeCalled();
        expect(productModel.create).toBeCalledWith(newProd);
    })
})