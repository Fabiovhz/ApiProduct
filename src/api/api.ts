import axios from 'axios';
import { Product } from '../types/character';

const api = axios.create({
  baseURL: 'https://dummyjson.com/products', 
});



// Traer categorías: ["smartphones", "laptops", ...]
export const getCategories = () => api.get<string[]>('/products/categories');

// Productos por categoría: category = "laptops"
export const getProductsByCategory = (category: string) =>
  api.get<{ products: Product[] }>(`/products/category/${category}`);


export default api;