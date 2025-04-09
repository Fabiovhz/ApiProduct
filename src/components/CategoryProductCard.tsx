import React from 'react';
import { Product } from '../types/character';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoryProductCard = ({ product }: { product: Product }) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
    //   onPress={() => navigation.navigate('ProductDetail', { product })}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: product.images?.[0] || product.thumbnail }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          {product.brand && <Text style={styles.brand}>{product.brand}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  brand: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});

export default CategoryProductCard;
