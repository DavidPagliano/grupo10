import express from 'express';

import { getCliente, getClientes, createCliente, deleteCliente, updateCliente } from '../controllers/cliente.js';

const router_producto = express.Router();

router_producto.get('/', getClientes);

router_producto.get('/:id', getCliente);

router_producto.post('/', createCliente);



router_producto.delete('/:id', deleteCliente);

router_producto.patch('/:id', updateCliente);

export default router_producto;