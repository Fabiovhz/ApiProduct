import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getCategories } from '../api/api';

const CategoriesScreen = ({ navigation }: any) => {
  const [categories, setCategories] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error('Error cargando categorías:', err);
        setError('No se pudieron cargar las categorías');
      });
  }, []);

  // 1) Mientras carga
  if (categories === null && error === null) {
    return (
      <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 2) Si hubo error
  if (error) {
    return (
      <View style={{ flex:1,justifyContent:'center',alignItems:'center',padding:16 }}>
        <Text style={{ color:'red', fontSize:16 }}>{error}</Text>
      </View>
    );
  }

  // 3) Si ya cargó correctamente (categories es string[])
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>
        Categorías
      </Text>
      <FlatList
        data={categories!}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}
            onPress={() =>
              navigation.navigate('ProductsByCategory', { category: item })
            }
          >
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
