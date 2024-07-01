import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Category from "./Category";
import SearchBar from "./SearchBar";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
        setFilteredProducts(json);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategoriesList(json));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.id.toString().includes(searchInput) ||
      product.description.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCategoryClick = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setFilteredProducts(json));
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Search:</h1>
          <SearchBar searchInput={searchInput} handleChange={handleChange} handleSearch={handleSearch} />
          <div className="flex justify-between mt-6">
            {categoriesList.map((category, index) => (
              <Category key={index} category={category} onClick={handleCategoryClick} />
            ))}
          </div>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
