
import React, { useState } from 'react';

const FarmerSignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    farmName: '',
    location: '',
    cropType: '',
    farmSize: '',
    businessActivity: '',
    productionLocation: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      farmName: '',
      location: '',
      cropType: '',
      farmSize: '',
      businessActivity: '',
      productionLocation: '',
      company: '',
    });
  };

  return (
    <div className="min-h-screen mt-20 mb-20 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mt font-bold mb-4">Inscription Agriculteur</h2>
        <br /> 
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray font-bold mb-2">Prénom</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray font-bold mb-2">Nom</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="email" className="block text-gray font-bold mb-2">Adresse email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="password" className="block text-gray font-bold mb-2">Mot de passe</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="farmName" className="block text-gray font-bold mb-2">Nom de la ferme</label>
              <input type="text" id="farmName" name="farmName" value={formData.farmName} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="location" className="block text-gray font-bold mb-2">Emplacement de la ferme</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="cropType" className="block text-gray font-bold mb-2">Type de culture principale</label>
              <input type="text" id="cropType" name="cropType" value={formData.cropType} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="farmSize" className="block text-gray font-bold mb-2">Taille de la ferme (hectares)</label>
              <input type="number" id="farmSize" name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="businessActivity" className="block text-gray font-bold mb-2">Activité de l'entreprise</label>
              <input type="text" id="businessActivity" name="businessActivity" value={formData.businessActivity} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="col-span-2 mb-4">
              <label htmlFor="productionLocation" className="block text-gray font-bold mb-2">Lieu de production</label>
              <input type="text" id="productionLocation" name="productionLocation" value={formData.productionLocation} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          {/* Bouton "S'enregistrer" */}
          <button type="button" onClick={handleSubmit} className="mt-4 w-full bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-green-600">Créer un compte</button>
        </form>
      </div>
    </div>
  );
};

export default FarmerSignUpPage;
