import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getProductsByCategory } from '../api/api';
import CategoryProductCard from '../components/CategoryProductCard';
import { Product } from '../types/character';

const ProductsByCategoryScreen = ({ route }:any) => {
  const { category } = route.params;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>
        {category.toUpperCase()}
      </Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CategoryProductCard product={item} />}
      />
    </View>
  );
};

export default ProductsByCategoryScreen;
