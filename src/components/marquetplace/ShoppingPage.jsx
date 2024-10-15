
import React, { useState, useEffect } from "react";
import apiService from "../../services/apiService";  // Importation du service API
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import Loader from "./Loader";
import ProductSearchBar from "./ProductSearchBar";

const ShoppingCartPage = () => {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // Utilisation de useEffect pour récupérer les produits au montage du composant
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Début du chargement
        const productData = await apiService.fetchProducts(); // Appel API
        setProducts(productData); // Mise à jour des produits
      } catch (err) {
        setError(err.message); // Gestion des erreurs
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchProducts(); // Appel de la fonction de récupération des produits
  }, []); // [] : cette fonction se déclenche une seule fois au montage du composant

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category); // Mise à jour de la catégorie sélectionnée
  };

  // Extraction des catégories uniques pour le filtrage
  const uniqueCategories = products && products.length > 0 ? [...new Set(products.map((product) => product.category))] : [];

  // Filtrage et tri des produits basés sur la catégorie sélectionnée et le terme de recherche
  const sortedAndFilteredProducts = products && products.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      (searchTerm === "" || (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue); // Mise à jour du terme de recherche
  };

  return (
    <div className="p-4 w-full shadow gap-10 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <section className="w-[20%] w-96">
        <div className="mt-2 p-5">
          {/* Barre de recherche pour filtrer les produits */}
          <ProductSearchBar onSearch={handleSearch} />
        </div>

        {/* Filtrage par catégorie */}
        <CategoryFilter
          categories={uniqueCategories}
          filterProductsByCategory={filterProductsByCategory}
          totalProducts={products && products.length}
        />
      </section>

      {/* Section des produits */}
      <section className="p-5 ml-[5%] rounded shadow border-gray w-full lg:w-3/4">
        <Loader loading={loading} />
        {error ? (
          <p className="text-center text-red-500">{error}</p> // Affichage du message d'erreur en cas d'échec
        ) : (
          !loading && sortedAndFilteredProducts && sortedAndFilteredProducts.length === 0 ? (
            <p className="text-center">Aucun produit ne correspond à votre recherche</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Affichage des produits */}
              {sortedAndFilteredProducts && sortedAndFilteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default ShoppingCartPage;
