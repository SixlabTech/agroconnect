// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import HomeCard from "./HomeCard";
// import Loader from "../components/marquetplace/Loader";

// export default function CardGrid() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card"); // Remplacez par votre URL d"API
//         const cleanedData = response.data.map(item => ({
//           discount: item.discount,
//           title: item.title,
//           price: item.price,
//           oldPrice: item.oldPrice || null,
//           image: item.image
//         }));
//         setData(cleanedData);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="grid ml-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-x-0-10 gap-y-12">
//       {loading ? (
//         <Loader loading={loading} />
//       ) : (
//         data.map((card, index) => (
//           <HomeCard
//             key={index}
//             discount={card.discount}
//             title={card.title}
//             price={card.price}
//             oldPrice={card.oldPrice}
//             image={card.image}
//           />
//         ))
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import Loader from "../components/marquetplace/Loader";

export default function CardGrid() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card"); // Remplacez par votre URL d'API
        const cleanedData = response.data.map(item => ({
          _id: item._id,
          name: item.name,
          subCategory: item.subCategory,
          category: item.category,
          image: item.image,
          price: item.price,
          discountedPrice: item.discountedPrice,
          stock: item.stock,
          discount: item.discount,
          quantity: item.quantity,
          title: item.title,
          oldPrice: item.oldPrice || null,
          timestamps: item.timestamps
        }));
        setData(cleanedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid ml-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-x-0-10 gap-y-12">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        data.map((card, index) => (
          <HomeCard
            key={card._id}
            name={card.name}
            subCategory={card.subCategory}
            category={card.category}
            image={card.image}
            price={card.price}
            discountedPrice={card.discountedPrice}
            stock={card.stock}
            discount={card.discount}
            quantity={card.quantity}
            title={card.title}
            oldPrice={card.oldPrice}
            timestamps={card.timestamps}
          />
        ))
      )}
    </div>
  );
}
