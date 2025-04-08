import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const RegisterScreen = ({navigation}:any) => {
    const[nombre,setNombre] = useState('');
    const[email,setEmail] = useState('');
    const[pass,setPassword] = useState('');


    const manejarRegistro = async()=>{
        // validar campos vacíos
        if(!nombre || !email || !pass){
            Alert.alert('Error','Todos los campos son obligatorios');
            return;
        }

       
        try{



            const data = await AsyncStorage.getItem('usuarios');
            const usuarios = data ? JSON.parse(data) : []; // parsear el usuario almacenado
            const existe = usuarios.find((u:any) => u.email === email); // buscar el usuario por email
            if(existe){
                Alert.alert('Error','El correo ya está registrado');
            }


            const nuevoUsuario = {nombre,email,password:pass};
            usuarios.push(nuevoUsuario); // agregar el nuevo usuario al array
            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios)); // guardar el array actualizado en AsyncStorage

            Alert.alert('Éxito','Registro completado');
            navigation.navigate('Login');
        }
        catch(error){
            Alert.alert('Error','Error al registrar el usuario');
        }

        
    }


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>
        <TextInput
        placeholder='Nombre'
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}></TextInput>
        <TextInput
        placeholder='Correo'
        style={styles.input}
        value={email}
        onChangeText={setEmail}></TextInput>
        <TextInput
        placeholder='Contraseña'
        secureTextEntry
        style={styles.input}
        value={pass}
        onChangeText={setPassword}></TextInput>
        
        <Button title='Registrarse' onPress={manejarRegistro}/>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:16,
        backgroundColor:'#fff'
    },
    title:{
        fontWeight:'bold',
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:5,
        padding:10,
        marginBottom:15,
    },
    button:{
        backgroundColor:'#007BFF',
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:'#fff',
        textAlign:'center'
    },
    registerText:{
        color:'#007BFF',
        textAlign:'center',
        marginTop:16,
    },
})



export default RegisterScreen
