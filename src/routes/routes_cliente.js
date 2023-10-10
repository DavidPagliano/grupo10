import express from 'express';

import { getCliente, getClientes, createCliente, deleteCliente, updateCliente } from '../controllers/users.js';

const router_producto = express.Router();

router_producto.get('/', getCliente);

router_producto.get('/:id', getClientes);

router_producto.post('/', createCliente);



router_producto.delete('/:id', deleteCliente);

router_producto.patch('/:id', updateCliente);

export default router_producto;