const SearchBar = ({ searchTerm, handleSearch, clearSearch }) => {
    return (
        <div className="flex items-center border-gray rounded border">
            <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={handleSearch}
                className="px-4 w-[90%] py-2 rounded-md focus:outline-none"
            />
            <button onClick={clearSearch} className="ml-2 px-4 py-2 rounded-md">
                ✕
            </button>
        </div>
    );
};
