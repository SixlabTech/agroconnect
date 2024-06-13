// 

// const express = require('express');
// const mongoose = require('mongoose');
// const Thing = require('./models/Thing'); // Assure-toi que le chemin vers ton modèle est correct

// const app = express();
// app.use(express.json()); // Permet de parser le corps des requêtes en JSON

// // Connexion à ta base de données MongoDB
// mongoose.connect('mongodb://localhost:27017/ma_base_de_donnees', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('Connexion à MongoDB réussie');
// })
// .catch((error) => {
//   console.error('Erreur de connexion à MongoDB :', error);
// });

// // Route pour créer un nouvel article
// app.post('/api/data', (req, res, next) => {
//   const { title, description, imageUrl, userId, price } = req.body;

//   // Création d'une nouvelle instance de Thing avec les données reçues
//   const newThing = new Thing({
//     title,
//     description,
//     imageUrl,
//     userId,
//     price
//   });

//   // Enregistrement de la nouvelle chose (article) dans la base de données
//   newThing.save()
//     .then(() => {
//       res.status(201).json({ message: 'Article créé avec succès !' });
//     })
//     .catch((error) => {
//       res.status(400).json({ error });
//     });
// });

// app.listen(3000, () => {
//   console.log('Serveur démarré sur le port 3000');
// });


// import React, { useState } from 'react';
// import axios from 'axios';

// function ArticleForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [userId, setUserId] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/data', {
//         title,
//         description,
//         imageUrl,
//         userId,
//         price
//       });
//       // Gérer le succès (par exemple, rediriger l'utilisateur vers une page de confirmation)
//       console.log('Article posté avec succès !');
//     } catch (error) {
//       // Gérer les erreurs (par exemple, afficher un message d'erreur à l'utilisateur)
//       console.error('Erreur lors de la publication de l\'article :', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mb-44 mt-10 mx-auto mt-8">
//       <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
//       <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
//       <input type="text" placeholder="URL de l'image" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
//       <input type="text" placeholder="ID de l'utilisateur" value={userId} onChange={e => setUserId(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
//       <input type="number" placeholder="Prix" value={price} onChange={e => setPrice(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4" />
//       <button type="submit" className="bg-blue text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Publier</button>
//     </form>
//   );
// }

// export default ArticleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductsForm = () => {
//   const [product, setProduct] = useState({
//     title: '',
//     description: '',
//     imageUrl: '',
//     price: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/products', product);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Erreur lors de la création du produit :', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Créer un nouveau produit</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block mb-2">Titre:</label>
//           <input type="text" id="title" name="title" value={product.title} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block mb-2">Description:</label>
//           <input type="text" id="description" name="description" value={product.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="imageUrl" className="block mb-2">URL de l'image:</label>
//           <input type="text" id="imageUrl" name="imageUrl" value={product.imageUrl} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block mb-2">Prix:</label>
//           <input type="number" id="price" name="price" value={product.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
//         </div>
//         <button type="submit" className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Créer</button>
//       </form>
//     </div>
//   );
// };

// export default ProductsForm;
