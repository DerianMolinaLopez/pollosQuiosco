import mongoose from 'mongoose'; // Corregido el error tipográfico
import colors from 'colors';

const conectarDB = async () => {
    mongoose.set('strictQuery',false)
    if (!process.env.MONGODB_URI) {
        console.log(colors.yellow.bold('La variable MONGO_URI no está definida.'));
    
        return;
    }

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        if (connection) {
            console.log(colors.green.bold('Conexión exitosa al servidor'));
        }
    } catch (error) {
        console.log(colors.red.bold('Error al conectarse al servidor'));
        console.log(error);
    }
}

export default conectarDB;