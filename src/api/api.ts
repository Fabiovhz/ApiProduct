import axios from 'axios';
import { Category, CategoryResponse, Product } from '../types/character';

const api = axios.create({
  // baseURL: 'https://dummyjson.com', 
  baseURL: 'https://dummyjson.com', 
});



// Traer categorías: ["smartphones", "laptops", ...]
// export const getCategories = () => api.get<Category[]>('/products/categories');

export const getCategories = () => api.get<CategoryResponse[]>(
  '/products/categories'
);

// Productos por categoría: category = "laptops"
export const getProductsByCategory = (category: string) =>
  api.get<{ products: Product[] }>(`/products/category/${category}`);


export default api;