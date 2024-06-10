import { Request, Response } from "express";
import Platillo from "../models/Platillo";

class PlatilloController {
    static async getPlatillos(req: Request, res: Response) {
        const platillos = await Platillo.find();
        res.send('get platillos');
    }
    static async createPlatillos(req: Request, res: Response) {
        try{
            //la imagen sera una de las url de las carpetas del frontend
            const platilloExiste = await Platillo.findOne({nombre:req.body.nombre})
            if(platilloExiste) return res.json({msg:'el platillo ya existe'}).status(400)
            await Platillo.create(req.body)
           return  res.send('platillo creado con exito')
        }catch(error){
            console.log(error)
            res.json({msg:'erorr en el servidor'}).status(500)
        }
      
        const platillos = await Platillo.find();
        res.send('get platillos');
    }
    static async getPlatillosByType(req: Request, res: Response) {
        try{
            const {tipo} = req.params
            const platillosExistentes = await Platillo.find({tipo}).select('_id nombre precio descripcion imagen')
            console.log('platillosENviados')
            return res.json(platillosExistentes) 
        }catch(error){
            console.log(error)
            res.json({msg:'erorr en el servidor'}).status(500)
        }
    }
    static async getPlatillosByID(req: Request, res: Response) {
        try{
             const {id} = req.params
              const platillo = await Platillo.findById(id)
              console.log(platillo)
              res.send('probando')
        }catch(error){
            console.log(error)
            res.json({msg:'erorr en el servidor'}).status(500)
        }
    }

}

export default PlatilloController;