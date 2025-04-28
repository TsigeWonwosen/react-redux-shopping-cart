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
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2 mx-auto mb-8 max-w-4xl mt-8  p-4 rounded-md shadow-sm">
      <form
        className=" flex justify-center flex-col items-center w-full  overflow-hidden rounded-md max-w-[450px] gap-3 sm:gap-0 sm:flex-row h-auto"
        onSubmit={hundleSubmit}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className=" h-9 w-full  px-6 py-1  focus:ring-green-500 transition   focus:ring-2 focus:outline-none border rounded-md sm:flex-1 sm:rounded-none sm:rounded-l-md border-gray-300  "
        />
        <div className="flex items-center justify-between w-auto h-auto  ">
          <select
            value={selectedCategory}
            onChange={handleCategory}
            className="w-auto  h-9 px-2 py-1 border-[1px] sm:bottom-0 sm:border-x-[1px]  border-gray-300  focus:outline-none focus:ring-1 focus:ring-green-500 transition  "
          >
            <option value="all">All Categories</option>
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
            className=" w-[50px] h-9 py-1 bg-green-500 flex items-center justify-center active:bg-green-500 focus:bg-green-500 hover:bg-green-600 transition duration-200 ease-in-out rounded-r-md"
            type="submit"
          >
            <Search className=" text-white w-[14px] h-[14px] font-semibold  " />
          </button>
        </div>
      </form>

      <div className="flex justify-center items-center gap-3 h-full w-auto">
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
