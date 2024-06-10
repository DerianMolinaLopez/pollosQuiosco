import pollo1 from '../assets/img/pollo1.jpg'
import pollo2 from '../assets/img/pollo2.jpg'
import pollo3 from '../assets/img/pollo3.jpg'
import pollo4 from '../assets/img/pollo4.jpg'
import pollo5 from '../assets/img/pollo5.jpg'
import coca600 from '../assets/img/coca600.jpg'
import papas from '../assets/img/mediaPapas.jpg'
import pepsiL from '../assets/img/pepsiL.jpg'
import PepsiLata from '../assets/img/PepsiLata.jpg'
import flautas from '../assets/img/flautas.jpg'
import salsa from '../assets/img/salsa.jpg'
import verdura from '../assets/img/verdura.jpg'
import sopFria from '../assets/img/sopaFria.jpg'
const diccionarioImagenes = [
    {
        _id:"666611842315a6a83bdb91b3",
        imagen:pollo1
    },
    {
        _id:"6666189e228e08acd76212c0",
        imagen:pollo2
    },
    {
        _id:"666618c5228e08acd76212c3",
        imagen:pollo4
    },
    {
        _id:"666618e2228e08acd76212c7",
        imagen:pollo5
    },
    {
        _id:"666618f6228e08acd76212ca",
        imagen:pollo3
    },
    ,
    {
        _id:"66661fad228e08acd7621364",
        imagen:coca600
    }
    ,
    {
        _id:"66661fca228e08acd7621368",
        imagen:coca600
    },
    {
        _id:"66661fd1228e08acd762136b",
        imagen:pepsiL
    },
    {
        _id:"666634ef228e08acd7621395",
        imagen:PepsiLata
    },
    /***papas*** */
    {
        _id:"66663564228e08acd76213a2",
        imagen:papas
    }
    ,
    {
        _id:"66663574228e08acd76213a5",
        imagen:papas
    },
    {
        _id:"6666358c228e08acd76213a8",
        imagen:flautas
    }
    ,
    {
        _id:"6666359c228e08acd76213ab",
        imagen:flautas
    },
    {
        _id:"666635ad228e08acd76213ae",
        imagen:flautas
    },
    {
        _id:"666635ba228e08acd76213b1",
        imagen:salsa
    },
    {
        _id:"666635d0228e08acd76213b4",
        imagen:verdura
    
    },
    {
        _id:"6666360f228e08acd76213b8",
        imagen:sopFria
    
    }
        
]
export function encontrarImagen(id: string) {
    const imagenObjeto = diccionarioImagenes.find(imagen => imagen?._id === id);
    return imagenObjeto;
}
//6666360f228e08acd76213b8
export default diccionarioImagenes
   