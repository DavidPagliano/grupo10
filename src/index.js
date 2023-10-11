//Librerias
import express from "express";
import bodyParser from "body-parser";

//Routes
import clienteRoutes from "./routes/routes_cliente.js";
import productosRoutes from "./routes/routes_producto.js";
import ventasRoutes from "./routes/routes_ventas.js";

//Middleware
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.use("/cliente", clienteRoutes);
app.use("/producto",productosRoutes);
app.use("/venteas", ventasRoutes);
app.get("/", (req, res) => res.send("Welcome to the API RFEST!"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));