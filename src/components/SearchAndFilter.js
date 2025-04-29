import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { filterByCategoriesAndSearch } from "../redux/action/cartAction";
import { Search, X } from "lucide-react";

function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  // const { filteredItems } = useSelector((state) => state.product);

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
    history.push("/products");
    if (searchTerm !== "" || selectedCategory !== "") {
      dispatch(filterByCategoriesAndSearch(selectedCategory, searchTerm));
      history.push(`?category=${selectedCategory}&search=${searchTerm}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2 mx-auto mb-8 max-w-4xl mt-8  p-4 rounded-md shadow-sm">
      <form
        className="  flex justify-center flex-col items-center w-full  rounded-md max-w-[450px] gap-3 sm:gap-0 sm:flex-row h-auto"
        onSubmit={hundleSubmit}
      >
        <section className="relative w-full h-auto   ">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="h-8 w-full  px-6 py-2  focus:ring-green-500/50 transition   focus:ring-1 focus:outline-none border rounded-md sm:flex-1 sm:rounded-none sm:rounded-l-md border-gray-300  "
          />
          <button
            className="absolute right-2 top-1/2 w-5 h-5 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            type="button"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            {searchTerm && <X className="w-4 h-4 text-gray-500" />}
          </button>
        </section>
        <div className="flex items-center justify-between w-auto h-auto  ">
          <select
            value={selectedCategory}
            onChange={handleCategory}
            className="w-auto  h-8 px-3 py-1 border-[1px] sm:bottom-0 sm:border-x-[1px]  border-gray-300  focus:outline-none focus:ring-1 focus:ring-green-500 transition bg-white "
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
            className=" w-[40px] h-8 py-1 bg-green-400 flex items-center justify-center active:bg-green-500 focus:bg-green-500 hover:bg-green-600 transition duration-200 ease-in-out rounded-r-md"
            type="submit"
          >
            <Search className=" text-white w-[15px] h-[15px]  " />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchAndFilter;
