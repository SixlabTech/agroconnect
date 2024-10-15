// // services/apiService.js
// import axios from 'axios';

// // Utilisation de la variable d'environnement
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const fetchProducts = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/product`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch products. Please try again later.");
//   }
// };

// const fetchCategories = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/categories`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch categories. Please try again later.");
//   }
// };

// export default {
//   fetchProducts,
//   fetchCategories,
// };


// services/apiService.js
import axios from 'axios';

// Utilisation de l'URL de base depuis les variables d'environnement
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Créer une instance Axios avec l'URL de base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Délai d'attente pour les requêtes
});

// Fonction pour récupérer les produits
const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/product");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products. Please try again later.");
  }
};

// Fonction pour récupérer les catégories
const fetchCategories = async () => {
  try {
    const response = await apiClient.get("/categories");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch categories. Please try again later.");
  }
};

export default {
  fetchProducts,
  fetchCategories,
};
