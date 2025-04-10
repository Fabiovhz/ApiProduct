import React, { useEffect, useRef, useState } from 'react'
import { Product } from '../types/character';
import api from '../api/api';
import global from '../styles/global';
import { ScrollView, Text } from 'react-native-gesture-handler';
import ProductsCard from '../components/ProductsCard';
import { View, Button, StyleSheet } from 'react-native';

const ListProductsScreen = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1); // Página actual
    const [totalPages, setTotalPages] = useState(0); // Total de páginas disponibles

    const productsPerPage = 10; // Número de productos por página

    const scrollViewRef = useRef<ScrollView>(null);
 // Referencia al ScrollView
    // useEffect(()=>{
    //     const fetchProducts = async () => {
    //         // const {data}  = await api.get<Product[]>('/products');
    //         // setProducts(data);

    //         const {data} = await api.get<{products: Product[]}>('/products');
    //         setProducts(data.products);
    //     };
    //     fetchProducts();
    // },[])

    // Función para cargar productos con paginación
    const fetchProducts = async (pageNumber: number) => {
        try {
            const skip = (pageNumber - 1) * productsPerPage;
            const { data } = await api.get<{ products: Product[], total: number }>(
                `/products?limit=${productsPerPage}&skip=${skip}`
            );
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / productsPerPage)); // Calcular total de páginas
            if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ y: 0, animated: true });
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    
    useEffect(() => {
        fetchProducts(page); // Cargar productos cuando la página cambie
       
    }, [page]);

   

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView 
                ref={scrollViewRef}
                contentContainerStyle={{ paddingBottom: 90 }}
                onContentSizeChange={() => scrollViewRef.current?.scrollTo({ y: 0, animated: false })}
            >
                {products.map((product) => (
                    <ProductsCard key={product.id} products={product} />
                ))}
            </ScrollView>

            {/* Contenedor de paginación */}
            <View style={styles.paginationContainer}>
                <Button
                    title="Anterior"
                    onPress={() => handlePageChange(Math.max(page - 1, 1))} 
                    disabled={page === 1} 
                />
                <Text style={styles.pageText}>Página {page} de {totalPages}</Text>
                <Button
                    title="Siguiente"
                    onPress={() => handlePageChange(Math.min(page + 1, totalPages))} 
                    disabled={page === totalPages} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
        zIndex: 10,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginBottom: 16,
    },
    pageText: {
        marginHorizontal: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default ListProductsScreen
