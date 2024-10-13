// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Send, CheckCircle, XCircle } from 'lucide-react';

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
//         import.meta.env.VITE_EMAILJS_SERVICE_ID, // Utilisez la variable d'environnement
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Utilisez la variable d'environnement
//         { name, email, message },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Utilisez la variable d'environnement
//       );
//       setStatus('success');
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setStatus('error');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="px-6 py-8">
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Contactez-nous</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Nom
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               />
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
//                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//               ></textarea>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 disabled={status === 'sending'}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 {status === 'sending' ? (
//                   'Envoi en cours...'
//                 ) : (
//                   <>
//                     <Send className="mr-2" size={20} />
//                     Envoyer
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//           {status === 'success' && (
//             <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
//               <CheckCircle className="text-green-500 mr-2" size={20} />
//               <span className="text-green-800">Message envoyé avec succès!</span>
//             </div>
//           )}
//           {status === 'error' && (
//             <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
//               <XCircle className="text-red-500 mr-2" size={20} />
//               <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Utilisez la variable d'environnement
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Utilisez la variable d'environnement
        { name, email, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Utilisez la variable d'environnement
      );
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-[#095D40] mb-8">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Nom
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                {status === 'sending' ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Envoyer
                  </>
                )}
              </button>
            </div>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 rounded-md flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              <span className="text-green-800">Message envoyé avec succès!</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 rounded-md flex items-center">
              <XCircle className="text-red-500 mr-2" size={20} />
              <span className="text-red-800">Erreur lors de l'envoi du message. Veuillez réessayer.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
