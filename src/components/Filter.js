import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductById,
  sortProductByPrice,
} from "../redux/action/cartAction";

const Filter = () => {
  const [sort, setSort] = useState("");
  const [Id, setId] = useState(0);
  const { filteredItems, items } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const count = items.length;
  return (
    <div className="bg-white flex h-[100px] justify-center items-start rounded-md  mt-6 gap-4 p-4 w-[90%] md:w-[60%] mx-auto shadow-md">
      <div className="flex justify-center items-center gap-3 h-full ">
        <label className="block text-sm font-medium text-gray-700">
          Products Found
        </label>
        <span className="text-md font-semibold">{count}</span>
      </div>
      <div className="flex justify-center items-center gap-3 h-full">
        <label className="block text-sm font-medium text-gray-700">
          Order By Price
        </label>
        <div className="relative">
          <select
            value={sort}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) =>
              dispatch(sortProductByPrice(filteredItems, e.target.value))
            }
          >
            <option
              value="DEFAULT"
              disabled
            >
              Choose your option
            </option>
            <option value="highest">Lowest to Highest</option>
            <option value="lowest">Highest to Lowest</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 h-full">
        <label className="block text-sm font-medium text-gray-700">
          <span>Filter By Id</span>
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={Id}
            onChange={(e) =>
              dispatch(filterProductById(filteredItems, e.target.value))
            }
          >
            <option value={0}>Id</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={70}>70</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
