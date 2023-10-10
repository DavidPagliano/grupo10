
import Productos from '../data/MOCK_DATA_producto.json'

export const getClientes = (req, res) => {
    console.log(`Products in the database: ${Productos}`);

    res.send(Productos);
}

export const createProducto = (req, res) => {   

    const id = Productos.length + 1;
    const { productos, precio } = req.body;

    if (id && productos && precio) {
    const nuevoProducto = { ...req.body, id };
    Productos.push(nuevoProducto);
    res.json(Productos);
    } else {
    res.status(500).json({ error: "There was an error." });
    }
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};