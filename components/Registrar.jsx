import {Text,View,TextInput,TouchableOpacity,Switch } from 'react-native'
import {useForm,Controller} from 'react-hook-form'
import {styles} from '../assets/styles/styles'
import { useState } from 'react';
import User from './Users';

export default function Registrar({navigation}){
    const {register,control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            name:'',
            user:'',
            password:'',
            nCuenta:'',
            identity:'',
            rol:'',
            fecha:'',
            saldo:''
        }
    })
    function generarnroCuenta(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    }
    const  onSubmit = data => {
      let fecha = new Date()
      let user = new User(data.name,data.user,data.password,generarnroCuenta(9999,9999999),data.identity,isfourth,fecha.toDateString(),data.saldo)
      user.registrar(user)
      navigation.navigate('Login')
    };

    const [isfourth, setIsfourth] = useState(false);
    const toggleSwitch = () => setIsfourth(isActive => !isActive);
    

    return(
     <View style={styles.container}>
        <Controller
            control={control}
            rules={{
            required:true,
            pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
            maxLength:30,
            minLength:3
            }}
            render={({field:{onChange,onBlur,value}})=>(
            <TextInput
            style={[styles.inputs,{borderColor:errors.fullname?.type == "required"||errors.fullname?.type == "maxLength"
            ||errors.fullname?.type == "minLength"||errors.fullname?.type == "pattern"?'red':'green'}]}
            placeholder="nombre completo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            
            />
            )}
            name='name'
      />
      {errors.fullname?.type=='required'&&<Text style={{color:'red'}}> El nombre es obligatorio</Text>}
      {errors.fullname?.type=='maxLength'&&<Text style={{color:'red'}}> El nombre debe tener almenos 30 chars</Text>}
      {errors.fullname?.type=='minLength'&&<Text style={{color:'red'}}> El nombre debe tener minimo 3 chars</Text>}
      {errors.fullname?.type=='pattern'&&<Text style={{color:'red'}}> El nombre debe tener letras y espacios</Text>}
      
      <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:30,
          minLength:8
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.username?.type == "required"||errors.username?.type == "maxLength"
          ||errors.username?.type == "minLength"||errors.username?.type == "pattern"?'red':'green'}]}
          placeholder="nombre de usuario"
          onChange={onChange}
          onBlur={onBlur}
          value={value}   
          />
        )}
        name='user'
      />
      {errors.username?.type=='required'&&<Text style={{color:'red'}}> El Usuario es obligatorio</Text>}
      {errors.username?.type=='maxLength'&&<Text style={{color:'red'}}> El Usuario debe tener almenos 30 chars</Text>}
      {errors.username?.type=='minLength'&&<Text style={{color:'red'}}> El Usuario debe tener minimo 8 chars</Text>}
      {errors.username?.type=='pattern'&&<Text style={{color:'red'}}> El Usuario debe tener solo letras y espacios</Text>}

    <Controller
        control={control}
        rules={{
          required:true,
          pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
          maxLength:20,
          minLength:6
        }}
        render={({field:{onChange,onBlur,value}})=>(
          <TextInput
          style={[styles.inputs,{borderColor:errors.password?.type == "required"||errors.password?.type == "maxLength"
          ||errors.password?.type == "minLength"||errors.password?.type == "pattern"?'red':'green'}]}
          placeholder="contraseña"
          onChange={onChange}
          onBlur={onBlur}
          value={value}  
          secureTextEntry={true}
          />
        )}
        name='password'
    />

    {errors.password?.type=='required'&&<Text style={{color:'red'}}>Debe agregar una contraseña</Text>}
    {errors.password?.type=='pattern'&&<Text style={{color:'red'}}>La contraseña debe tener numeros y letras y caracter especial</Text>}
    {errors.password?.type=='maxLength'&&<Text style={{color:'red'}}>debe tener maximo 20 caracteres</Text>}
    {errors.password?.type=='minLength'&&<Text style={{color:'red'}}>debe tener minimo 6 caracteres</Text>}

    <Controller
        control={control}
        rules={{
            required:true,
            pattern:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,10}(,\d{3})*(\.\d+)?$/,
            maxLength:11,
            minLength:5
        }}
        render={({field:{onChange,onBlur,value}})=>(
            <TextInput
                style={[styles.inputs,{borderColor:errors.identity?.type=='required'||errors.identity?.type=='pattern'||errors.identity?.type=='maxLength'||errors.identity?.type=='minLength'?'red':'green'}]}
                placeholder='cedula'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        )}
        name='identity'
    />
    {errors.identity?.type=='required'&&<Text style={{color:'red'}}>Debe ingresar su cedula</Text>}
    {errors.identity?.type=='pattern'&&<Text style={{color:'red'}}>Debe ingresar numeros</Text>}
    {errors.identity?.type=='maxLength'&&<Text style={{color:'red'}}>cedula fuera de rango max 11 caracteres</Text>}
    {errors.identity?.type=='minLength'&&<Text style={{color:'red'}}>la cedula debe contener minimo 5 caracteres</Text>}
    <Controller
        control={control}
        rules={{
            required:true,
            pattern:/^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,8}(,\d{3})*(\.\d+)?$/,
            maxLength:9,
            minLength:7
        }}
        render={({field:{onChange,onBlur,value}})=>(
            <TextInput
                style={[styles.inputs,{borderColor:errors.Saldo?.type=='required'||errors.Saldo?.type=='pattern'||errors.Saldo?.type == 'maxlength'|| errors.Saldo ?.type == 'minLength'?'red':'green'}]}
                placeholder='Ingrese el saldo '
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        )}
        name='saldo'
    />

      <View style={{flexDirection:'row',marginTop:20,marginBottom:20}}>  
        <Text> es Admin? </Text>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}       
              onValueChange={toggleSwitch}
              value={isfourth}
            />
      </View>

        <TouchableOpacity 
            style={styles.butons}
            onPress={handleSubmit(onSubmit)}
        >
            <Text style={{color:'white'}}>Registrarse</Text>
        </TouchableOpacity>
      
     </View>
    )
}