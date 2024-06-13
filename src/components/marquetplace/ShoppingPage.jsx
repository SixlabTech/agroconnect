// import React, { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import CategoryFilter from "./CategoryFilter";
// import Loader from "./Loader";
// import ButtonSell from "../button/ButtonSell";
// import ProductSearchBar from "./ProductSearchBar";

// const ShoppingCartPage = () => {
//   const [products, setProducts] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         "https://capstone2-c2-josephb613.onrender.com/api/product"
//       );
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setProducts([]);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   const uniqueCategories = products && products.length > 0 ? [...new Set(products.map((product) => product.category))] : [];

//   const sortedAndFilteredProducts = products && products.filter(
//     (product) =>
//       (selectedCategory === "" || product.category === selectedCategory) &&
//       (searchTerm === "" || (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())))
//   );

//   const handleSearch = (searchValue) => {
//     setSearchTerm(searchValue);
//   };

//   return (
//     <div className="p-4 w-full  shadow gap-10 flex flex-col lg:flex-row">

//       {/* Sidebar */}
//       <section className="w-[20%] w-96  ">
//         <div className="mt-2 p-5">
//         <ProductSearchBar onSearch={handleSearch} /> 
//         </div>
//        <ButtonSell/>
//         <CategoryFilter
//           categories={uniqueCategories}
//           filterProductsByCategory={filterProductsByCategory}
//           totalProducts={products && products.length} // Check if products exists before accessing its length
//         />
//         <div className="w-96">
//           <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
//           <div className="absolute z-50 mt-10 ml-4 text-white">
//             <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
//             <p className="font-bold text-1xl mb-10">Tous vos produits agricoles en gros</p>
//             <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
//           </div>
//           <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie rounde-sm"  />
//         </div>
//       </section>

//       <section className="p-5 ml-[5%] rounded shadow border-gray w-full lg:w-3/4">
//         <Loader loading={loading} />
//         {!loading && sortedAndFilteredProducts && sortedAndFilteredProducts.length === 0 ? (
//           <p className="text-center">Aucun produit ne correspond à votre recherche</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedAndFilteredProducts && sortedAndFilteredProducts.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ShoppingCartPage;


import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import Loader from "./Loader";
import ButtonSell from "../button/ButtonSell";
import ProductSearchBar from "./ProductSearchBar";

const ShoppingCartPage = () => {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/product");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = products && products.length > 0 ? [...new Set(products.map((product) => product.category))] : [];

  const sortedAndFilteredProducts = products && products.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      (searchTerm === "" || (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className="p-4 w-full  shadow gap-10 flex flex-col lg:flex-row">

      {/* Sidebar */}
      <section className="w-[20%] w-96  ">
        <div className="mt-2 p-5">
        <ProductSearchBar onSearch={handleSearch} /> 
        </div>
       <ButtonSell/>
        <CategoryFilter
          categories={uniqueCategories}
          filterProductsByCategory={filterProductsByCategory}
          totalProducts={products && products.length} // Check if products exists before accessing its length
        />
        <div className="w-96">
          <h2 className="mt-10 mb-5 text-green ml-8 font-extrabold">NOS PRODUITS</h2>
          <div className="absolute z-50 mt-10 ml-4 text-white">
            <h3 className="font-normal text-xm mb-2">PRODUITS DE GROS</h3>
            <p className="font-bold text-1xl mb-10">Tous vos produits agricoles en gros</p>
            <p className="text-bg-gold mb-10 font-bold">A partir de 500 kg </p>
          </div>
          <img src="https://res.cloudinary.com/dqrs3xyic/image/upload/v1713447871/Banner%20publicite/11_fdza96.webp" alt="image banner section categorie rounde-sm"  />
        </div>
      </section>

      <section className="p-5 ml-[5%] rounded shadow border-gray w-full lg:w-3/4">
        <Loader loading={loading} />
        {!loading && sortedAndFilteredProducts && sortedAndFilteredProducts.length === 0 ? (
          <p className="text-center">Aucun produit ne correspond à votre recherche</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAndFilteredProducts && sortedAndFilteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ShoppingCartPage;
