import express from 'express';

import { getProducto, getProductos, createProducto, deleteProducto, updateProducto } from '../controllers/productos.js';

const router_producto = express.Router();

router_producto.get('/', getProductos);

router_producto.get('/:id', getProducto);

router_producto.post('/', createProducto);



router_producto.delete('/:id', deleteProducto);

router_producto.put('/:id', updateProducto);

export default router_producto;