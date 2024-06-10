import { Router } from "express";
import PlatillosConroller from "../controllers/PlatilloController";
const routerPlatilllos = Router()
routerPlatilllos.get('/',PlatillosConroller.getPlatillos)
routerPlatilllos.post('/',PlatillosConroller.createPlatillos)
routerPlatilllos.get('/:tipo',PlatillosConroller.getPlatillosByType)
routerPlatilllos.get('/articulo/:id',PlatillosConroller.getPlatillosByID)
export default routerPlatilllos