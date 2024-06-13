// // ProductSearchBar.js
// import React from "react";
// import{ useState } from "react";

// const ProductSearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Rechercher un produit..."
//       className="border border-gray-400 rounded-md p-2 mb-4"
//       value={searchTerm}
//       onChange={handleSearchChange}
//     />
//   );
// };

// export default ProductSearchBar;


import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const ProductSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm(""); 
    onSearch("");
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Rechercher des un produits..."
        className=" bg-bg-gold rounded-md p-4 pl-8 mb-4 w-full"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <button
          className="absolute inset-y-0 mb-3 right-0 px-3 flex items-center text-gray hover:text-gray-600"
          onClick={clearSearch}
        >
          <FaTimes />
        </button>
      )}
      {/* <div className="absolute inset-y-0 left-0 flex items-center mb-3 pl-2 text-gray pointer-events-none">
        <FaSearch />
      </div> */}
    </div>
  );
};

export default ProductSearchBar;
