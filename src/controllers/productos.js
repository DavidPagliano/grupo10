import ProductosDb from '../data/MOCK_DATA_producto.json' assert { type: "json" }


export const getProductos = (req, res) => {
    console.log(`Products in the database: ${ProductosDb}`);
    res.send(ProductosDb);
}

export const createProducto = (req, res) => {   

    const id = ProductosDb.length + 1;
    const { productos, precio } = req.body;

    if (id && productos && precio) {
    const nuevoProducto = { ...req.body, id };
    ProductosDb.push(nuevoProducto);
    res.json(ProductosDb);
    } else {
    res.status(500).json({ error: "There was an error." });
    }
};

export const getProducto = (req, res) => {
    res.send(req.params.id)
};

export const deleteProducto = (req, res) => { 
    
    const { id } = req.params;
    if (id) {
        ProductosDb.forEach((producto) => {
            if (producto.id == id) {
                ProductosDb.splice(i, 1);
            }
            res.json(ProductosDb);
            console.log(`Product with id ${req.params.id} has been deleted`);
        })
      
    }
};

export const updateProducto =  (req,res) => {
    const { id } = req.params;
    const { productos, precio } = req.body;
    if (id && productos && precio ) {
        ProductosDb.forEach((producto) => {
            if (producto.id === id) {
                producto.Productos = productos;
                producto.Precio = precio;
            }
        })
        res.json(ProductosDb);
    } else {
        res.status(500).json({ error: "There was an error." });
    }
};