import React, { useEffect, useState } from "react";
import axios from "axios";
import EnGrosSection from "./Wholesale";
import NouveauxProduitsSection from "./NewProduct";
import CategorySection from "./CategorySection";
import Loader from "../components/marquetplace/Loader";

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

export default function CardGrid() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cleanedData = await fetchCardData();
        const categorizedData = cleanedData.reduce((acc, card) => {
          if (!acc[card.category]) {
            acc[card.category] = [];
          }
          acc[card.category].push(card);
          return acc;
        }, {});
        setData(categorizedData);
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <>
          {data["En gros"] && <EnGrosSection cards={data["En gros"]} />}
          {data["Nouveaux produits"] && <NouveauxProduitsSection cards={data["Nouveaux produits"]} />}
          {Object.keys(data).filter(category => category !== "En gros" && category !== "Nouveaux produits").map((category, index) => (
            <CategorySection
              key={index}
              category={category}
              cards={data[category]}
            />
          ))}
        </>
      )}
    </div>
  );
}
