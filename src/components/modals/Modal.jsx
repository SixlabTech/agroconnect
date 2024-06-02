// import React, { useState } from "react";
// import { AiOutlineClose } from 'react-icons/ai';

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-bold">🚧Attention 🚧</h2>
//               <button onClick={() => setIsOpen(false)}>
//                 <AiOutlineClose className="h-6 w-6 text-gray" />
//               </button>
//             </div>
//             <div className="mt-4">
//               <p className="text-lg text-center">
//                 Site web en construction 
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;




import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import FlowerExplosion from './FlowerExplosion';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExploding, setIsExploding] = useState(false);

  const closeModal = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Durée de l'animation d'explosion
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">🚧Attention 🚧</h2>
              <button onClick={closeModal}>
                <AiOutlineClose className="h-6 w-6 text-gray" />
              </button>
            </div>
            <div className="mt-4">
              <p className="text-lg text-center">
                Site web en construction 
              </p>
            </div>
          </div>
        </div>
      )}
      {isExploding && <FlowerExplosion />}
    </>
  );
};

export default Modal;
