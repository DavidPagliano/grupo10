import express from 'express';

import { getVenta, getVentas } from '../controllers/ventas.js';

const router_producto = express.Router();

router_producto.get('/', getVentas);

router_producto.get('/:id', getVenta);

export default router_producto;