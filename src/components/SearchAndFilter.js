import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  sortProductByPrice,
  filterByCategoriesAndSearch,
} from "../redux/action/cartAction";
import { ListOrdered, Search } from "lucide-react";

function SearchAndFilter() {
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  const { filteredItems } = useSelector((state) => state.product);

  const categories = ["Men's", "Women's", "Kid's", "Electronics", "Jewelery"];

  const history = useHistory();

  const handleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "" || selectedCategory !== "") {
      dispatch(filterByCategoriesAndSearch(selectedCategory, searchTerm));
      history.push(`?category=${selectedCategory}&search=${searchTerm}`);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mx-auto mb-8 max-w-4xl mt-4">
      <form
        className=" flex justify-between items-center w-full md:w-2/3 border h-8 border-gray-300  overflow-hidden rounded-md  focus:ring-green-500 transition   focus:ring-2 focus:outline-none"
        onSubmit={hundleSubmit}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-1 h-full  px-6 py-1  focus:ring-green-500 transition   focus:ring-2 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={handleCategory}
          className="w-auto md:w-1/4 px-3 py-1 border-2 border-gray-300  focus:outline-none focus:ring-1 focus:ring-green-500 transition bg-white "
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
        <button
          className=" w-8 h-full py-1 bg-green-500 flex items-center justify-center  hover:bg-green-600 transition duration-200 ease-in-out"
          type="submit"
        >
          <Search className=" text-white w-[14px] h-[14px] font-semibold  " />
        </button>
      </form>

      <div className="flex justify-center items-center gap-3 h-full flex-1">
        <label className="block text-sm font-medium text-gray-700">
          <ListOrdered />
        </label>
        <div className="relative w-full">
          <select
            value={sort}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 px-4  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              if (e.target.value === "") {
                return setSort("");
              } else {
                setSort(e.target.value);
                dispatch(sortProductByPrice(filteredItems, e.target.value));
              }
            }}
          >
            <option value="highest"> Highest to Lowest price</option>
            <option value="lowest">Lowest to highest price</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
