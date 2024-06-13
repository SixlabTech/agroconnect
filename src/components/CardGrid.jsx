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
//         const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card"); // Remplacez par votre URL d'API
//         const cleanedData = response.data.map(item => ({
//           _id: item._id,
//           name: item.name,
//           subCategory: item.subCategory,
//           category: item.category,
//           image: item.image,
//           price: item.price,
//           discountedPrice: item.discountedPrice,
//           stock: item.stock,
//           discount: item.discount,
//           quantity: item.quantity,
//           title: item.title,
//           oldPrice: item.oldPrice || null,
//           timestamps: item.timestamps
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
//             key={card._id}
//             name={card.name}
//             subCategory={card.subCategory}
//             category={card.category}
//             image={card.image}
//             price={card.price}
//             discountedPrice={card.discountedPrice}
//             stock={card.stock}
//             discount={card.discount}
//             quantity={card.quantity}
//             title={card.title}
//             oldPrice={card.oldPrice}
//             timestamps={card.timestamps}
//           />
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import HomeCard from "./HomeCard";
// import Loader from "../components/marquetplace/Loader";

// export default function CardGrid() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card");
//         const cleanedData = response.data.map(item => ({
//           _id: item._id,
//           name: item.name,
//           subCategory: item.subCategory,
//           category: item.category,
//           image: item.image,
//           price: item.price,
//           discountedPrice: item.discountedPrice,
//           stock: item.stock,
//           discount: item.discount,
//           quantity: item.quantity,
//           title: item.title,
//           oldPrice: item.oldPrice || null,
//           timestamps: item.timestamps
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
//     <div className="ml-12 border">
//       {loading ? (
//         <Loader loading={loading} />
//       ) : (
//         <Splide
//           options={{
//             type: 'loop',
//             perPage: 4,
//             perMove: 1,
//             gap: '1rem',
//             pagination: false,
//             arrows: true,
//             autoplay: true, // Activation de l'autoplay
//             interval: 3000, // Intervalle de défilement automatique en millisecondes
//             pauseOnHover: true, // Pause le défilement lors du survol
//             breakpoints: {
//               1200: {
//                 perPage: 3,
//               },
//               768: {
//                 perPage: 2,
//               },
//               576: {
//                 perPage: 1,
//               },
//             },
//           }}
//         >
//           {data.map((card) => (
//             <SplideSlide key={card._id}>
//               <HomeCard
//                 name={card.name}
//                 subCategory={card.subCategory}
//                 category={card.category}
//                 image={card.image}
//                 price={card.price}
//                 discountedPrice={card.discountedPrice}
//                 stock={card.stock}
//                 discount={card.discount}
//                 quantity={card.quantity}
//                 title={card.title}
//                 oldPrice={card.oldPrice}
//                 timestamps={card.timestamps}
//               />
//             </SplideSlide>
//           ))}
//         </Splide>
//       )}
//     </div>
//   );
// }










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import HomeCard from "./HomeCard";
// import Loader from "../components/marquetplace/Loader";

// const fetchCardData = async () => {
//   try {
//     const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card");
//     return response.data.map(item => ({
//       discount: item.discount,
//       title: item.title,
//       price: item.price,
//       oldPrice: item.oldPrice || null,
//       image: item.image,
//     }));
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données :", error);
//     throw error;
//   }
// };

// export default function CardGrid() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const cleanedData = await fetchCardData();
//         setData(cleanedData);
//       } catch (error) {
//         // Handle error if necessary
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className=" flex  gap-20 w-full">
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


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import HomeCard from "./HomeCard";
// import Loader from "../components/marquetplace/Loader";

// const fetchCardData = async () => {
//   try {
//     const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card");
//     return response.data.map(item => ({
//       discount: item.discount,
//       title: item.title,
//       price: item.price,
//       oldPrice: item.oldPrice || null,
//       image: item.image,
//       category: item.category,  // Inclure la catégorie
//     }));
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données :", error);
//     throw error;
//   }
// };

// export default function CardGrid() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const cleanedData = await fetchCardData();
//         const categorizedData = cleanedData.reduce((acc, card) => {
//           if (!acc[card.category]) {
//             acc[card.category] = [];
//           }
//           acc[card.category].push(card);
//           return acc;
//         }, {});
//         setData(categorizedData);
//       } catch (error) {
//         // Handle error if necessary
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="w-full">
//       {loading ? (
//         <Loader loading={loading} />
//       ) : (
//         Object.keys(data).map((category, index) => (
//           <div key={index}>
//             <h2 className="category-title text-2xl font-bold mb-4">{category}</h2>
//             <div className="flex flex-wrap gap-4">
//               {data[category].map((card, cardIndex) => (
//                 <HomeCard
//                   key={cardIndex}
//                   discount={card.discount}
//                   title={card.title}
//                   price={card.price}
//                   oldPrice={card.oldPrice}
//                   image={card.image}
//                 />
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import EnGrosSection from "./Wholesale";
import NouveauxProduitsSection from "./NewProduct";
import CategorySection from "./CategorySection";
import Loader from "../components/marquetplace/Loader";

const fetchCardData = async () => {
  try {
    const response = await axios.get("https://capstone2-c2-josephb613.onrender.com/api/card");
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
