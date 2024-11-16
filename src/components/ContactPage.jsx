// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { Send, CheckCircle, XCircle } from 'lucide-react';
// import L from 'leaflet';
// import FaqsSection from './FaqsList';
// import { MdClose } from 'react-icons/md'; // Icône de fermeture

// // Importer `useNavigate` depuis `react-router-dom`
// import { useNavigate } from 'react-router-dom';

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
//   const [subject, setSubject] = useState('Question générale');
//   const [status, setStatus] = useState('idle'); // statut de l'envoi
//   const [showContact, setShowContact] = useState(true); // état pour contrôler l'affichage du formulaire

//   const navigate = useNavigate(); // Initialiser le hook de navigation

//   // Fonction d'envoi du formulaire
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('sending');

//     try {
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         { name, email, message, subject },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );
//       setStatus('success');
//       setName('');
//       setEmail('');
//       setMessage('');
//       setSubject('Question générale');
//       // Rediriger vers la page d'accueil après envoi
//       setTimeout(() => {
//         navigate('/'); // Redirection vers la page d'accueil
//       }, 2000); // Délai de 2 secondes avant redirection pour que l'utilisateur voie le message de succès
//     } catch (error) {
//       console.error('Erreur lors de l\'envoi du message :', error);
//       setStatus('error');
//     }
//   };

//   return (
//    <div>
//     {/* section avec l'image de la banner  */}
//     <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto rounded-md py-10 sm:py-14 md:py-20 bg-text-green">
//   <h1 className="text-3xl sm:text-4xl font-bold text-center text-white leading-tight">Contactez-nous</h1>
// </div>


//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       {showContact && (
//         <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
//           {/* Section gauche: formulaire */}
//           <div className="p-8">
           
//             <p className="mb-6 text-gray-600">
//               Vous avez des questions, souhaitez passer une commande, ou simplement dire bonjour ? Remplissez le formulaire ci-dessous pour nous contacter.
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Nom complet
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Adresse e-mail
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                   Sujet
//                 </label>
//                 <select
//                   id="subject"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//                 >
//                   <option>Question générale</option>
//                   <option>Demande de commande</option>
//                   <option>Retour d'expérience</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                   className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   disabled={status === 'sending'}
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#095D40] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
//                 >
//                   {status === 'sending' ? 'Envoi...' : (
//                     <>
//                       <Send className="mr-2" size={20} />
//                       Envoyer le message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>

//             {status === 'success' && (
//               <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
//                 <CheckCircle className="text-green-500 mr-2" size={20} />
//                 <span className="text-green-800">Message envoyé avec succès !</span>
//               </div>
//             )}
//             {status === 'error' && (
//               <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
//                 <XCircle className="text-red-500 mr-2" size={20} />
//                 <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
//               </div>
//             )}
//           </div>

//           {/* Section droite: Carte interactive */}
//           <div className="relative z-10">
//             <MapContainer center={[-4.321522, 15.275638]} zoom={13} className="w-full h-full">
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <Marker position={[48.8566, 2.3522]}>
//                 <Popup>Notre siège social</Popup>
//               </Marker>
//             </MapContainer>
//           </div>
//         </div>
//       )}

//       {/* Bouton de retour à la page d'accueil, visible uniquement sur mobile */}
//       {status === 'success' && (
//         <button
//           onClick={() => navigate('/')} // Redirection vers la page d'accueil
//           className="fixed bottom-4 right-4 p-3 bg-white text-gray-600 rounded-full shadow-lg md:hidden"
//         >
//           <MdClose size={30} />
//         </button>
//       )}

//       {/* Section d'informations supplémentaires */}
//       {/* <FaqsSection /> */}

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <p>&copy; 2024 AgroEntreprise. Tous droits réservés.</p>
//         </div>
//       </footer>
//     </div>
//     </div>
//   );
// };

// export default ContactPage


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

// Configure Leaflet's default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Composant MessageStatus pour afficher les statuts d'envoi
const MessageStatus = ({ status }) => {
  if (status === 'success') {
    return (
      <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
        <CheckCircle className="text-green-500 mr-2" size={20} />
        <span className="text-green-800">Message envoyé avec succès !</span>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
        <XCircle className="text-red-500 mr-2" size={20} />
        <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
      </div>
    );
  }
  return null;
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Question générale',
  });
  const [status, setStatus] = useState('idle');
  const [showContact, setShowContact] = useState(true);
  const navigate = useNavigate();

  // Gestion des changements de champ
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '', subject: 'Question générale' });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Section avec l'image de la banner */}
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[80%] mx-auto rounded-md py-10 sm:py-14 md:py-36 bg-text-green">
  <h1 className="text-3xl sm:text-4xl font-bold text-center text-white leading-tight">Contactez-nous</h1>
</div>


      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        {showContact && (
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Section gauche: formulaire */}
            <div className="p-8">
              <p className="mb-6 text-gray-600">
                Vous avez des questions, souhaitez passer une commande, ou simplement dire bonjour ? Remplissez le formulaire ci-dessous pour nous contacter.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {field === 'name' ? 'Nom complet' : field === 'email' ? 'Adresse e-mail' : 'Message'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'message' ? 'textarea' : 'text'}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#095D40] focus:border-[#095D40]"
                  >
                    <option>Question générale</option>
                    <option>Demande de commande</option>
                    <option>Retour d'expérience</option>
                  </select>
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

              <MessageStatus status={status} />
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
        )}

        {/* Bouton de retour à la page d'accueil */}
        {status === 'success' && (
          <button
            onClick={() => navigate('/')}
            className="fixed bottom-4 right-4 p-3 bg-white text-gray-600 rounded-full shadow-lg md:hidden"
          >
            <MdClose size={30} />
          </button>
        )}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2024 AgroEntreprise. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
