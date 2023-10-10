import VentasDb from '../data/MOCK_DATA_ventas.json' assert { type: "json" }


export const getVentas = (req, res) => {
    console.log(`Ventas in the database: ${VentasDb}`);
    res.send(ProductosDb);
}

export const getVenta = (req, res) => {
    res.send(req.params.id)
};