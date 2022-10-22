import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IoIosBody,IoIosListBox,IoLogoUsd} from "react-icons/io";
import Perfil from './Perfil';
import Movimientos from './Movimientos';
import Counts from './Counts'
let UserAdmin={}

 function HomeAdmin({navigation,route}){
    const Tab = createBottomTabNavigator()
    
     UserAdmin = {
        user:route.params.user,
        name:route.params.name,
        saldo:route.params.saldo,
        nroCuenta:route.params.nCuenta,
        fecha:route.params.fecha,
        identity:route.params.identity,
        rol:route.params.rol,
     }
    //Useru ={fullname:"jivfdjknvek",username:"brestisres",password:"brestisres",nroCuenta:"213546416",identity:5165468,rol:true,fecha:'10/10/2022',Saldo:4000000}

    return(
    <>
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false
            })}
            
        >
            
            <Tab.Screen name = "Perfil" component={Perfil} options={{
                title: "Perfil",
                tabBarActiveTintColor:'green',
                 tabBarIcon:({focused}) => (
              
                     <IoIosBody fontSize={focused?40:25} color={focused?'green':''}/>
                 )
             }} />
            
            <Tab.Screen name = "Counts" component={Counts} options={{
                title: "Cuentas",
                tabBarActiveTintColor:'green',
                tabBarIcon:({focused}) => (
                     <IoLogoUsd fontSize={focused?40:25} color={focused?'green':''}/>
                 )
             }}/>

            <Tab.Screen name = "Movimientos" component={Movimientos} options = {{
                title: "Movimientos",
                tabBarActiveTintColor:'green',
                tabBarIcon:({focused})=>(<IoIosListBox fontSize={focused?40:25} color={focused?'green':''}/>)
            }}  />
            </Tab.Navigator>
        </>
    )
}
export {HomeAdmin,UserAdmin}