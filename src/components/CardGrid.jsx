import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSellingCards from "./TopSellingCards";
import NewProductsCards from "./NewProductsCards";
import WholesaleCards from "./WholesaleCards";
import HomeCarrouselPromo from "../components/promotion/HomeCarrouselPromo";

const fetchCardData = async () => {
  try {
    const response = await axios.get("https://backend-bilanga.onrender.com/api/card");
    return response.data.map(item => ({
      discount: item.discount,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice || null,
      image: item.image,
      category: item.category,
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

// Composant principal pour afficher les produits par catégorie
const CardGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cleanedData = await fetchCardData();
        setData(cleanedData);
      } catch (error) {
        console.error("Erreur lors du fetch des données:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Chargement en cours ...</div>;
  }

  // Filtrer les données par catégorie
  const topSellingData = data.filter(card => card.category === "Produit le plus vendus");
  const newProductsData = data.filter(card => card.category === "Nouveaux produits");
  const wholesaleData = data.filter(card => card.category === "En gros");

  return (
    <div className="w-full">
      <br />
      <br />
      
      <TopSellingCards data={topSellingData} />
      <br />
      <WholesaleCards data={wholesaleData} />
      <br />
      <HomeCarrouselPromo />
      <br />
      <br />
      <NewProductsCards data={newProductsData} />
    </div>
  );
};

export default CardGrid;

