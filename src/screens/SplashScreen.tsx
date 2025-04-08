import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const SplashScreen = ({navigation}:any) => {

    useEffect(() => {
        const verificarSesion = async () => {
            const user = await AsyncStorage.getItem('usuarioActivo'); // obtener el usuario de AsyncStorage

        setTimeout(() => {
            if (user) {
                const datos = JSON.parse(user); // parsear el usuario almacenado
                navigation.replace('Home', { user: datos.nombre });
            } else {
                navigation.replace('Login');
            }
        }, 2000); // espera 2 segundos antes de redirigir    
    }
    
            verificarSesion(); // llamar a la función para verificar la sesión
    }, []);

  return (
   <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
})


export default SplashScreen
