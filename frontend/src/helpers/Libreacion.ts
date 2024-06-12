import { liberacion as liberacionAPI } from "../api/Peticiones"

export function liberacion(id:string):void{
    liberacionAPI(id).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    window.location.reload()
}