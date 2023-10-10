import ClientesDB from '../data/MOCK_DATA_Cliente.json' assert { type: "json" };

export const getClientes = (req, res) => {
    console.log(`Clients in the database: ${ClientesDB}`);

    res.send(ClientesDB);
}

export const createCliente = (req, res) => {   

    const id = ClientesDB.length + 1;
    const { Nombre, Apellido, Email, Direccion, Telefono, Fecha_de_nacimiento } = req.body;

    if (id && Nombre && Apellido && Email && Direccion && Telefono && Fecha_de_nacimiento) {
    const nuevoCliente = { ...req.body, id };
    ClientesDB.push(nuevoCliente);
    res.json(ClientesDB);
    } else {
    res.status(500).json({ error: "There was an error." });
    }
};

export const getCliente = (req, res) => {
    res.send(req.params.id)
};

export const deleteCliente = (req, res) => { 
    
    const { id } = req.params;
    if (id) {
        ClientesDB.forEach((cliente) => {
            if (cliente.id == id) {
                ClientesDB.splice(i, 1);
            }
            res.json(ClientesDB);
            console.log(`Client with id ${req.params.id} has been deleted`);
        })
      
    }
};

export const updateCliente =  (req,res) => {
    const { id } = req.params;
    const { Nombre, Apellido, Email, Direccion, Telefono, Fecha_de_nacimiento } = req.body;
    if (id && Nombre && Apellido && Email && Direccion && Telefono && Fecha_de_nacimiento) {
        ClientesDB.forEach((cliente) => {
            if (cliente.id === id) {
                cliente.Nombre = Nombre;
                cliente.Apellido = Apellido;
                cliente.Email = Email;
                cliente.Direccion = Direccion;
                cliente.Telefono = Telefono;
                cliente.Fecha_de_nacimiento = Fecha_de_nacimiento;
            }
        })
        res.json(ClientesDB);
    } else {
        res.status(500).json({ error: "There was an error." });
    }
};