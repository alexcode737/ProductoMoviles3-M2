let users = [{name:"Alexis Torres",user:"AlexTorres",password:"AlexisTorres",nCuenta:"213546416",identity:5165468,rol:false,fecha:'10/10/2022',saldo:5500000}]

export default class User {
    
    constructor(name,user,password,nCuenta,identity,rol,fecha,saldo){
        this.name = name;
        this.user = user;
        this.password = password;
        this.nCuenta = nCuenta;
        this.identity = identity;
        this.rol = rol;
        this.fecha = fecha;
        this.saldo = saldo;

    }

    registrar(User){
        users.push(User)
        console.log('usuario registrado')
    }

    lista(){
        return users;
    }
}