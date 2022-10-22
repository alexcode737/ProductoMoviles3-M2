import FormProfile from "./formProfile"
import { UserH } from "./Home"
import {UserAdmin} from './HomeAdmin'

let User={}
export default function Perfil({navigation}){ 
    if(UserH.rol){
       User=UserH
    }else {
        User=UserAdmin 
    }
    console.log(UserAdmin)

    return(
        <>
            
            <FormProfile
                label="Usuario:"
                dato={User.user}
            />

            <FormProfile
                label="Nombre: "
                dato={User.name}
            />

            <FormProfile
                label="Identificacion: "
                dato={User.identity}
            />

            <FormProfile
                label = "Apertura de cuenta: "
                dato = {User.fecha}
            />

            <FormProfile
                label = "Numero de cuenta: "
                dato = {User.nCuenta}
            />

            <FormProfile
                label = "Saldo de cuenta: "
                dato = {User.saldo}
            />       
        </>
    )    
}