import React from "react";

const CategoryFilter = ({ categories, filterProductsByCategory, totalProducts }) => {
    return (
        <div className="mt-6 p-3 rounded paramsCategories">
            <div className="px-4">
                <h2 className="text-green font-extrabold">PAR CATÉGORIES</h2>
            </div>
            <hr className="border-1 border-gray" />
            <button
                onClick={() => filterProductsByCategory("")}
                className="text-left px-4"
            >
                Voir tout ({totalProducts})
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className="text-left px-4 hover_bg"
                    onClick={() => filterProductsByCategory(category)}
                >
                    {category}
                </button>

            ))}
          
        </div>
    );
};

export default CategoryFilter;
