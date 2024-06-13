// import React, { useState } from "react";
// import axios from "axios"; // Pour effectuer des requêtes HTTP

// const ArticleForm = () => {
//   const [articleData, setArticleData] = useState({
//     title: '',
//     category: '',
//     image: '',
//     price: {
//       amount: 0,
//       currency: '',
//       unit: 'piece',
//     },
//     stock: true,
//     quantity: {
//       amount: 0,
//       unit: 'piece',
//     },
//     entity: {
//       name: '',
//       icon: '',
//     },
//     description: '',
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Envoyer les données à votre backend pour les enregistrer dans la base de données MongoDB
//       const response = await axios.post('https://capstone2-c2-josephb613.onrender.com/api/', articleData);

//       console.log(response.data); // Vous pouvez gérer la réponse comme vous le souhaitez
//       // Réinitialiser les champs après la soumission réussie
//       setArticleData({
//         title: '',
//         category: '',
//         image: '',
//         price: {
//           amount: 0,
//           currency: '',
//           unit: 'piece',
//         },
//         stock: true,
//         quantity: {
//           amount: 0,
//           unit: 'piece',
//         },
//         entity: {
//           name: '',
//           icon: '',
//         },
//         description: '',
//       });
//     } catch (error) {
//       console.error('Erreur lors de la soumission de l\'article :', error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setArticleData({
//       ...articleData,
//       [name]: value,
//     });
//   };

//   return (
    
//     <form onSubmit={handleSubmit} className="max-w-md  border p-5 rounded mt-96 mb-96  mx-auto">
//         <div>

//         </div>
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Nom du produits</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={articleData.title}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="category" className="block text-sm font-medium text-gray-700">Catégorie</label>
//         <input
//           type="text"
//           id="category"
//           name="category"
//           value={articleData.category}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           value={articleData.image}
//           onChange={handleChange}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Prix</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={articleData.price.amount}
//           onChange={(event) => setArticleData({ ...articleData, price: { ...articleData.price, amount: event.target.value } })}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantité</label>
//         <input
//           type="number"
//           id="quantity"
//           name="quantity"
//           value={articleData.quantity.amount}
//           onChange={(event) => setArticleData({ ...articleData, quantity: { ...articleData.quantity, amount: event.target.value } })}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="entityName" className="block text-sm font-medium text-gray-700">Nom de l'entité</label>
//         <input
//           type="text"
//           id="entityName"
//           name="entityName"
//           value={articleData.entity.name}
//           onChange={(event) => setArticleData({ ...articleData, entity: { ...articleData.entity, name: event.target.value } })}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="entityIcon" className="block text-sm font-medium text-gray-700">Icône de l'entité</label>
//         <input
//           type="text"
//           id="entityIcon"
//           name="entityIcon"
//           value={articleData.entity.icon}
//           onChange={(event) => setArticleData({ ...articleData, entity: { ...articleData.entity, icon: event.target.value } })}
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={articleData.description}
//           onChange={handleChange}
//           rows="3"
//           className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="inline-block bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Publier l'article
//       </button>
//     </form>
//   );
// };

// export default ArticleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const NewArticleForm = () => {
//   const [articleData, setArticleData] = useState({
//     title: '',
//     category: '',
//     image: '',
//     price: {
//       amount: 0,
//       currency: '',
//       unit: ''
//     },
//     stock: true,
//     quantity: {
//       amount: 0,
//       unit: ''
//     },
//     entity: {
//       name: '',
//       icon: ''
//     },
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setArticleData({
//       ...articleData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://capstone2-c2-josephb613.onrender.com/api/product', articleData)
//       .then(response => {
//         console.log(response.data);
//         // Réinitialiser le formulaire après soumission réussie si nécessaire
//         // setArticleData({ title: '', category: '', ... });
//       })
//       .catch(error => {
//         console.error('Error posting article:', error);
//       });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-96 mb-96">
//       <form onSubmit={handleSubmit} className="space-y-4 border">
//         <input type="text" name="title" value={articleData.title} onChange={handleChange} placeholder="Title" className="input bg-green border" required />
//         <input type="text" name="category" value={articleData.category} onChange={handleChange} placeholder="Category" className="bg-green input" required />
//         <input type="text" name="image" value={articleData.image} onChange={handleChange} placeholder="Image URL" className="bg-green input" required />
//         {/* Autres champs à saisir ici */}
//         <textarea name="description" value={articleData.description} onChange={handleChange} placeholder="Description" className="bg-green input" required></textarea>
//         <button type="submit" className="btn bg-blue text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default NewArticleForm;


// import React, { useState } from 'react';

// const AddProductForm = () => {
//   const [product, setProduct] = useState({
//     title: '',
//     category: '',
//     image: '',
//     price: { amount: 0, currency: 'USD', unit: 'piece' },
//     stock: true,
//     quantity: { amount: 0, unit: 'piece' },
//     entity: { name: '', icon: '' },
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://capstone2-c2-josephb613.onrender.com/api/product', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(product),
//       });

//       if (response.ok) {
//         // Traitez la réponse positive de l'API ici.
//         alert('Produit ajouté avec succès !');
//       } else {
//         // Traitez les erreurs de l'API ici.
//         alert('Une erreur est survenue lors de l\'ajout du produit');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Une erreur est survenue lors de l\'ajout du produit');
//     }
//   };

//   return (
//     <div className="flex flex-col mt-96 border mb-96 gap-2">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2">
//           <label htmlFor="title">Titre</label>
//           <input id="title" name="title" value={product.title} onChange={handleChange} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="category">Catégorie</label>
//           <input id="category" name="category" value={product.category} onChange={handleChange} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="image">Image</label>
//           <input id="image" name="image" value={product.image} onChange={handleChange} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="price">Prix</label>
//           <input id="price" name="price" value={product.price.amount} onChange={handleChange} />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label htmlFor="price">Prix</label>
//           <div className="flex gap-2 items-center">
//             <input id="price" name="price" value={product.price.amount} onChange={handleChange} className="w-32" />
//             <select name="currency" value={product.price.currency} onChange={handleChange} className="w-24">
//               <option value="USD">USD</option>
//               {/* Ajoutez d'autres options de devises au besoin */}
//             </select>
//             <select name="unit" value={product.price.unit} onChange={handleChange} className="w-24">
//               <option value="piece">pièce</option>
//               {/* Ajoutez d'autres options d'unité au besoin */}
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="stock">Stock</label>
//           <input type="checkbox" id="stock" name="stock" checked={product.stock} onChange={() => setProduct(prevProduct => ({ ...prevProduct, stock: !prevProduct.stock }))} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="quantity">Quantité</label>
//           <div className="flex gap-2 items-center">
//             <input id="quantity" name="quantity" value={product.quantity.amount} onChange={handleChange} className="w-32" />
//             <select name="unit" value={product.quantity.unit} onChange={handleChange} className="w-24">
//               <option value="piece">pièce</option>
//               {/* Ajoutez d'autres options d'unité au besoin */}
//             </select>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="entity">Entité</label>
//           <input id="entity" name="entity" value={product.entity.name} onChange={handleChange} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="description">Description</label>
//           <textarea id="description" name="description" value={product.description} onChange={handleChange} rows="4" />
//         </div>
//         <button type="submit" className="bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600">Ajouter</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;





// import React, { useState } from 'react';
// import axios from 'axios';

// const PostProductForm = () => {
//   const [productData, setProductData] = useState({
//     title: '',
//     description: '',
//     imageUrl: '',
//     price: '',
//     currency: '',
//     unit: '',
//     stock: true,
//     quantity: '',
//     entity: {
//       name: '',
//       icon: ''
//     }
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://capstone2-c2-josephb613.onrender.com/api/product', productData);
//       alert('Product posted successfully!');
//       // Réinitialiser le formulaire après l'envoi réussi si nécessaire
//     } catch (error) {
//       console.error('Error posting product:', error);
//       alert('An error occurred while posting the product.');
//     }
//   };

//   return (
//     <div className='mt-96 mb-96'>
//       <h2>Post New Product</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="title" placeholder="Title" value={productData.title} onChange={handleChange} required className='bg-green' />
//         <textarea name="description" placeholder="Description" value={productData.description} onChange={handleChange} required className='bg-green' />
//         <input type="text" name="imageUrl" placeholder="Image URL" value={productData.imageUrl} onChange={handleChange} className='bg-green'/>
//         <input type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} required className='bg-green' />
//         <input type="text" name="currency" placeholder="Currency" value={productData.currency} onChange={handleChange} required className='bg-green' />
//         <input type="text" name="unit" placeholder="Unit" value={productData.unit} onChange={handleChange} required className='bg-green'/>
//         <input type="number" name="quantity" placeholder="Quantity" value={productData.quantity} onChange={handleChange} required className='bg-green'/>
//         <input type="text" name="entity[name]" placeholder="Entity Name" value={productData.entity.name} onChange={handleChange} className='bg-green'/>
//         <input type="text" name="entity[icon]" placeholder="Entity Icon URL" value={productData.entity.icon} onChange={handleChange}className='bg-green' />
//         <br />
//         <br />
//         <button type="submit" className='border'>Post Product</button>
//       </form>
//     </div>
//   );
// };

// export default PostProductForm;

import React, { useState } from 'react';
import axios from 'axios';

const PostProductForm = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    price: {
      amount: '',
      currency: '',
      unit: ''
    },
    stock: true,
    quantity: {
      amount: '',
      unit: ''
    },
    entity: {
      name: '',
      icon: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameArray = name.split('.');
    if (nameArray.length === 2) {
      setProductData(prevData => ({
        ...prevData,
        [nameArray[0]]: {
          ...prevData[nameArray[0]],
          [nameArray[1]]: value,
        }
      }));
    } else {
      setProductData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://capstone2-c2-josephb613.onrender.com/api/product', productData);
      alert('Product posted successfully!');
      // Réinitialiser le formulaire après l'envoi réussi si nécessaire
    } catch (error) {
      console.error('Error posting product:', error);
      alert('An error occurred while posting the product.');
    }
  };

  return (
    <div className='mt-96 mb-96'>
      <h2>Post New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={productData.title} onChange={handleChange} required className='bg-green' />
        <textarea name="description" placeholder="Description" value={productData.description} onChange={handleChange} required className='bg-green' />
        <input type="text" name="imageUrl" placeholder="Image URL" value={productData.imageUrl} onChange={handleChange} className='bg-green' />
        <input type="number" name="price.amount" placeholder="Price" value={productData.price.amount} onChange={handleChange}  className='bg-green'  />
        <input type="text" name="price.currency" placeholder="Currency" value={productData.price.currency} onChange={handleChange} required  className='bg-green' />
        <input type="text" name="price.unit" placeholder="Unit" value={productData.price.unit} onChange={handleChange} required className='bg-green'  />
        <input type="text" name="entity.name" placeholder="Entity Name" value={productData.entity.name} onChange={handleChange} className='bg-green'  />
        <input type="text" name="entity.icon" placeholder="Entity Icon URL" value={productData.entity.icon} onChange={handleChange} className='bg-green'  />
        <br />
        <br />
        <button type="submit" className='border'>Post Product</button>
      </form>
    </div>
  );
};

export default PostProductForm;
