import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';    
import conectarDB from './db/databse';
import routerPlatilllos from './routes/PlatillosRoute';
import routerPedido from './routes/PedidoRoute';
const app = express();
dotenv.config();
app.use(cors())
app.use(json())
app.listen(3000,()=>{
    console.log('server corriendo')
})
app.use('/platillos',routerPlatilllos)
app.use('/pedidos',routerPedido)
conectarDB()