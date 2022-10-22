import { View } from "react-native"
import FormProfile from "./formProfile"

export default function Movimientos(){
    const arr = [{
    "Saldo":"$3000000",
    "fecha":"Sun Oct 16 2022",
    "concepto":"Pago nomina",
    "r":false
    },
    {"Saldo":"$-100000",
    "fecha":"Sun Oct 14 2022",
    "concepto":"retiro corresponal",
    "r":true
    },
    {"Saldo":"$-100000",
    "fecha":"Sun Oct 12 2022",
    "concepto":"PAGO SERVICIOS",
    "r":true
    },
    {
        "Saldo":"$350000",
        "fecha":"Sun Oct 12 2022",
        "concepto":"TRANSFERENCIA DE NEQUI",
        "r":false
        },
        {"Saldo":"$-100000",
        "fecha":"Sun Oct 12 2022",
        "concepto":"PAGO TIGO",
        "r":true
        },
        {"Saldo":"$100000",
        "fecha":"Sun Oct 10 2022",
        "concepto":"PAGO PROVEEDORES",
        "r":false
        }]
    return(
        <View >
            {
                arr.map(movement => {
                   return(
                    <View style={{backgroundColor:movement.r?'#CD5C5C':'#98FB98',borderWidth:1}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                            <FormProfile
                                label='Fecha:  '
                                dato={movement.fecha}
                            />                         
                            <FormProfile
                                label = 'Valor: '
                                dato = {movement.Saldo}
                            />                         
                        </View>
                            <FormProfile
                                label='Concepto: '
                                dato = {movement.concepto}
                            />               
                    </View> 
                   )
                  
                })
            }
        </View>
    )
}