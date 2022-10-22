import { View } from "react-native";
import {listas} from '../assets/styles/styles'
import FormProfile from "./formProfile";
import User from "./Users";
let usuario = new User()
let arr= usuario.lista()
export default function Counts(){
    
    return(
        <>
            {
                arr.map(d =>{
                    return(
                        <View style={listas.container}>
                            <View style={{display:'flex',flexDirection:'row'}}>
                                <FormProfile
                                 label='Nombre cliente: '
                                 dato={d.name}
                                />
                                <FormProfile
                                 label='Cedula: '
                                 dato={d.identity}
                                />

                            </View>
                            <FormProfile
                             label='Apertura'
                             dato={d.fecha}/>
                             <FormProfile
                             label='Numero de cuenta'
                             dato={d.nCuenta}
                             />
                             <FormProfile
                             label='Saldo'
                             dato={d.saldo}
                             />
                        </View>
                    )
                }

                )
            }
        </>
    )   
}