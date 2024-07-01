const SearchBar = ({ searchInput, handleChange, handleSearch }) => (
    <form onSubmit={handleSearch}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative">
        <input
          type="search"
          name="search"
          onChange={handleChange}
          value={searchInput}
          className="block w-1/3 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search products..."
          required
        />
        <button
          type="submit"
          className="text-white mt-2 bg-blue-700 hover:bg-blue-800 "
        >
          Search
        </button>
      </div>
    </form>
  );
  
  export default SearchBar;
  