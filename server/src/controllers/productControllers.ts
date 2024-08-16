import { Request, Response } from 'express';
import Product from '../models/product';
import * as Errors from '../utils/errors';
import { SuccessResponse } from '../utils/success';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getProductsById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ message: 'Produto não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto' });
      }
};

export const getProductsByName = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({ productName: req.params.name });
        if (products.length > 0) {
            res.json(products);
        } else {
            res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
};