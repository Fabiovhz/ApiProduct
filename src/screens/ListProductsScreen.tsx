import React, { useEffect, useState } from 'react'
import { Product } from '../types/character';
import api from '../api/api';
import global from '../styles/global';
import { ScrollView, Text } from 'react-native-gesture-handler';
import ProductsCard from '../components/ProductsCard';

const ListProductsScreen = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            // const {data}  = await api.get<Product[]>('/products');
            // setProducts(data);

            const {data} = await api.get<{products: Product[]}>('');
            setProducts(data.products);
        };
        fetchProducts();
    },[])


  return (
    <ScrollView style={global.container}>
        {/* <Text style={global.title}>Lista de Productos</Text> */}
        {products.map((product) => (
            <ProductsCard key={product.id} products={product}/>
        ))}
    </ScrollView>
  )
}

export default ListProductsScreen
