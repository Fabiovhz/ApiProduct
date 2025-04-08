import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ListProductsScreen from '../screens/ListProductsScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Inicio'}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{title: 'Inicio'}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}/>
      <Stack.Screen name="ListProductsScreen" component={ListProductsScreen} options={{title: 'Lista de Productos'}}/>
      {/* <Stack.Screen name='SplashScreen' component={SplashScreen} options={{title:'Bienvenido'}}></Stack.Screen> */}
    </Stack.Navigator>
  )
}

export default StackNavigator
