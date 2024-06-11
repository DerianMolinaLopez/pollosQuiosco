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
        _id:"6668c9be87050ce5c05337ca",
        imagen:pollo1
    },
    {
        _id:"6668c9e687050ce5c05337d0",
        imagen:pollo2
    },
    {
        _id:"6668ca3587050ce5c05337d5",
        imagen:pollo4
    },
    {
        _id:"6668ca4587050ce5c05337d8",
        imagen:pollo5
    },
    {
        _id:"6668caa587050ce5c05337e1",
        imagen:pollo3
    },
    ,
    {
        _id:"6668cae187050ce5c05337e5",
        imagen:coca600
    }
    ,
    {
        _id:"6668cb0b87050ce5c05337eb",
        imagen:coca600
    },
    {
        _id:"6668cb2487050ce5c05337ee",
        imagen:pepsiL
    },
    {
        _id:"6668cb3787050ce5c05337f1",
        imagen:PepsiLata
    },
    /***papas*** */
    {
        _id:"6668cc8487050ce5c0533802",
        imagen:papas
    }
    ,
    {
        _id:"6668cca987050ce5c0533806",
        imagen:papas
    },
    {
        _id:"6668cd0887050ce5c0533814",
        imagen:flautas
    }
    ,
    {
        _id:"6668ccf287050ce5c0533811",
        imagen:flautas
    },
    {
        _id:"6668cceb87050ce5c053380e",
        imagen:flautas
    },
    {
        _id:"6668cd3387050ce5c0533819",
        imagen:salsa
    },
    {
        _id:"6668cd5d87050ce5c053381d",
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
   