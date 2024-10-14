// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Send, CheckCircle, XCircle, Info, Phone, Mail } from 'lucide-react';
// import L from 'leaflet';
// import FaqsSection from './FaqsList';

// // Configure Leaflet's default marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// const ContactPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         { name, email, message },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       setStatus('success');
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error('Erreur lors de l\'envoi du message :', error);
//       setStatus('error');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 mt-[10%] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* Section gauche: formulaire */}
//         <div className="p-8">
//           <h2 className="text-2xl font-bold leading-7 text-center text-green mb-8">Contactez-nous</h2>
//           <p className="mb-6 text-gray-600">
//             Vous avez des questions, souhaitez passer une commande, ou simplement dire bonjour ? Remplissez le formulaire ci-dessous pour nous contacter.
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Nom complet
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Adresse e-mail
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//               />
//             </div>
//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                 Sujet
//               </label>
//               <select
//                 id="subject"
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//               >
//                 <option>Question générale</option>
//                 <option>Demande de commande</option>
//                 <option>Retour d'expérience</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 disabled={status === 'sending'}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#095D40] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
//               >
//                 {status === 'sending' ? 'Envoi...' : (
//                   <>
//                     <Send className="mr-2" size={20} />
//                     Envoyer le message
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>

//           {status === 'success' && (
//             <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
//               <CheckCircle className="text-green-500 mr-2" size={20} />
//               <span className="text-green-800">Message envoyé avec succès !</span>
//             </div>
//           )}
//           {status === 'error' && (
//             <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
//               <XCircle className="text-red-500 mr-2" size={20} />
//               <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
//             </div>
//           )}
//         </div>

//         {/* Section droite: Carte interactive */}
//         <div className="relative z-10">
//           <MapContainer center={[-4.321522, 15.275638,]} zoom={13} className="w-full h-full">
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker position={[48.8566, 2.3522]}>
//               <Popup>Notre siège social</Popup>
//             </Marker>
//           </MapContainer>
//         </div>
//       </div>

//       {/* Section d'informations supplémentaires */}
//       {/* <div className="bg-white py-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <h3 className="text-3xl font-semibold text-[#095D40] mb-4">À propos de nous</h3>
//           <p className="text-lg text-gray-600 mb-6">
//             Nous sommes une entreprise agricole dédiée à fournir des produits de haute qualité et à améliorer l'accès aux ressources pour les agriculteurs en Afrique.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="flex items-center justify-center">
//               <Info size={40} className="text-[#095D40] mr-4" />
//               <p className="text-gray-600">Plus de 20 ans d'expérience dans l'industrie agricole.</p>
//             </div>
//             <div className="flex items-center justify-center">
//               <Phone size={40} className="text-[#095D40] mr-4" />
//               <p className="text-gray-600">Contactez-nous au +33 1 23 45 67 89.</p>
//             </div>
//             <div className="flex items-center justify-center">
//               <Mail size={40} className="text-[#095D40] mr-4" />
//               <p className="text-gray-600">Envoyez-nous un e-mail à info@agroentreprise.com.</p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <br />
//       <br />
      
//       <FaqsSection/>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <p>&copy; 2024 AgroEntreprise. Tous droits réservés.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Send, CheckCircle, XCircle, Info, Phone, Mail } from 'lucide-react';
import L from 'leaflet';
import FaqsSection from './FaqsList';

// Configure Leaflet's default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Question générale'); // Nouveau state pour le sujet
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, message, subject }, // Envoi du sujet ici
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setSubject('Question générale'); // Réinitialisation du sujet après envoi
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-[10%] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Section gauche: formulaire */}
        <div className="p-8">
          <h2 className="text-2xl font-bold leading-7 text-center text-green mb-8">Contactez-nous</h2>
          <p className="mb-6 text-gray-600">
            Vous avez des questions, souhaitez passer une commande, ou simplement dire bonjour ? Remplissez le formulaire ci-dessous pour nous contacter.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Sujet
              </label>
              <select
                id="subject"
                value={subject} // Lier l'état à la valeur du champ
                onChange={(e) => setSubject(e.target.value)} // Mettre à jour l'état lorsqu'une option est sélectionnée
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
              >
                <option>Question générale</option>
                <option>Demande de commande</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#095D40] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
              >
                {status === 'sending' ? 'Envoi...' : (
                  <>
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-green-800">Message envoyé avec succès !</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
              <XCircle className="text-red-500 mr-2" size={20} />
              <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
            </div>
          )}
        </div>

        {/* Section droite: Carte interactive */}
        <div className="relative z-10">
          <MapContainer center={[-4.321522, 15.275638]} zoom={13} className="w-full h-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[48.8566, 2.3522]}>
              <Popup>Notre siège social</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Section d'informations supplémentaires */}
      <FaqsSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 AgroEntreprise. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
