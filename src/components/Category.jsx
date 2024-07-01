const Category = ({ category, onClick }) => (
    <button
      onClick={() => onClick(category)}
      className="w-full px-4 py-2 border bg-[#64748b] text-center text-white transition duration-300 ease-in-out hover:bg-[#020617] focus:outline-none"
    >
      {category}
    </button>
  );
  
  export default Category;
  