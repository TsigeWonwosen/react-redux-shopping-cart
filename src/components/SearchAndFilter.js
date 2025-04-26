import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  filterProductById,
  sortProductByPrice,
} from "../redux/action/cartAction";

function SearchAndFilter({ categories, onSearch, onCategoryChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { filteredItems, items } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mx-auto mb-8 max-w-lg">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full md:w-2/3 px-6 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={handleCategory}
        className="w-auto md:w-1/3 px-3 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 transition bg-white "
      >
        <option value="">All Categories</option>
        {categories.map((category, idx) => (
          <option
            key={idx}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchAndFilter;
