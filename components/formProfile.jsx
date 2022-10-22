import { View,Text } from "react-native-web"
import {stylePerfil} from '../assets/styles/styles'


export default function FormProfile({label,dato}){
    
    return(
        <View style={stylePerfil.rowsProfile}>
            <Text style = {stylePerfil.label}>{label}</Text>
            <Text style = { stylePerfil.dato}>{dato}</Text>
        </View>
    )
}