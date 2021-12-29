import { NextFunction, Request, Response } from "express";

import ProductRepository from "../../repository/product/Respository";

export default class ProductController {

  static instance: ProductController;

  static getInstance(): ProductController {

    if (!ProductController.instance) {
      ProductController.instance = new ProductController();
    }
    return ProductController.instance;
  }


  async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductRepository.getInstance().createProduct(req.body);
      res.status(201).send({ message: "Product Created" });
    } catch (err) {
      next(err);
    }
  }
  async getType(req: Request, res: Response, next: NextFunction) {
    try {
      const getType = await ProductRepository.getInstance().getTypes();
      res.status(200).send({
        type: getType
      })
    } catch (err) {
      next(err);
    }
  }

  async getProduct(req: any, res: Response, next: NextFunction) {
    try {
      const { limit, skip } = req.query;
      const product = await ProductRepository.getInstance().getProducts(req.params.type, limit, skip);
      res.send({
        data: [...product, ...product, ...product, ...product]
      })
    } catch (err) {
      next(err);
    }
  }
}
