import { Router } from "express";
import PlatillosConroller from "../controllers/PlatilloController";
const routerPlatilllos = Router()
routerPlatilllos.get('/',PlatillosConroller.getPlatillos)
routerPlatilllos.post('/',PlatillosConroller.createPlatillos)
routerPlatilllos.get('/:tipo',PlatillosConroller.getPlatillosByType)
export default routerPlatilllos