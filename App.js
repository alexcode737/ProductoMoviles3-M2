import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './components/Home'
import {HomeAdmin} from './components/HomeAdmin'
import Login from './components/Login';
import Profile from './components/Perfil';
import Registrar from './components/Registrar';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      >
        <Stack.Screen name = "Home" component={Home} options={{title:'Aplic Banco'}}/> 
        <Stack.Screen name = "HomeAdmin" component={HomeAdmin} options={{title:'Aplicacion Banco'}}/> 
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Profile" component={Profile}/>
        <Stack.Screen name = "Registrar" component={Registrar} options={{title:'Registrar usuario'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}