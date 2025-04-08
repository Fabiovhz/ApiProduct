import React from 'react'
import { Product } from '../types/character'
import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const ProductsCard = ({ products }: { products: Product }) => {
  const navigate = useNavigation<any>();
  return (
    <Pressable>
      <View style={styles.cardContainer}>
        {/* {products.images.length > 0 && (
          <Image source={{ uri: products.images[0] }} style={styles.image} />
        )} */}

        {/* Si no hay imágenes disponibles en el array `images`, se muestra la imagen de `thumbnail`. 
   Esto asegura que siempre haya una imagen visible del producto, incluso si no tiene una imagen principal en el array `images`. */}

        <Image
          source={{ uri: products.images?.[0] ? products.images[0] : products.thumbnail }}
          style={styles.image}
        />
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.description}>{products.description}</Text>
        <Text style={styles.brand}>{products.brand}</Text>
        <Text style={styles.price}>Price: ${products.price}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffffff', // Fondo blanco para la tarjeta
    borderRadius: 12,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // Sombra
    shadowOpacity: 0.1, // Sombra
    shadowRadius: 5,  // Sombra
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,  // Mantén la relación de aspecto de la imagen
    borderRadius: 12,
    resizeMode: 'cover', // Ajusta la imagen para que cubra el área sin deformarse
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});



export default ProductsCard
