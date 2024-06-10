import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export const useGlobalContext = () =>{
    const context = useContext(GlobalContext)
    if(context === undefined){
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}