import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Pressable, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const HomeScreen = ({route,navigation}:any) => {

    const { user } = route.params; // obtener el usuario de la ruta
    // const navigate = useNavigation<any>();

    const handlePress = () => {
        navigation.navigate('ListProductsScreen');
    }

    const handlePressCategories = () => {
        // navigate.navigate('CategoriesScreen');
        navigation.navigate('CategoriesScreen');
    }

    const cerrarSesion = async() => {
        try {
            await AsyncStorage.removeItem('usuario'); // eliminar el usuario de AsyncStorage
            // Alert.alert('Éxito', 'Sesión cerrada');
            navigation.replace('Login'); // reemplaza la pantalla actual por la de login
        } catch (error) {
            Alert.alert('Error', 'Error al cerrar sesión');
        }
    }


  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Lista de Productos</Text>
          
        </Pressable>
        <Pressable style={styles.button} onPress={handlePressCategories}>
            <Text style={styles.buttonText}>Categorias</Text>
        </Pressable>

        <Pressable style={styles.buttonClose} onPress={cerrarSesion}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',  
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#D4AF37',  
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
        width: '80%',
       
    },
    buttonClose: {
        backgroundColor: '#FF0000',  
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
        width: '80%',
       
    },
})

export default HomeScreen
