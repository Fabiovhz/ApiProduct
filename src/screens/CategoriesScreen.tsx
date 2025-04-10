import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { getCategories } from '../api/api';
import { CategoryResponse } from '../types/character';

const CategoriesScreen = ({ navigation }: any) => {
  // const [categories, setCategories] = useState<string[] | null>(null);

  const [categories, setCategories] = useState<CategoryResponse[] | null>(null);



  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.data))
      .catch(err => {
        console.error('Error cargando categorías:', err);
        setError('No se pudieron cargar las categorías');
      });
  }, []);

  
  if (categories === null && error === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
      </View>
    );
  }
  console.log(categories)

  
  return (
    <View style={{ flex: 1, padding: 16, marginTop: 10, marginBottom: 50 }}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => `${item.slug}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              
              console.log('Categoría seleccionada:', item.name);
              navigation.navigate('ProductsByCategoryScreen', { category: item.slug });
            }}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#158d21',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CategoriesScreen;
