import React, { useState } from "react";
import { sortProductByPrice } from "../redux/action/cartAction";
import { ListOrdered } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function OrderBy() {
  const [sort, setSort] = useState("");
  const { filteredItems } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-end items-center  md:px-9 px-4 py-2 mb-1 mt-4  h-auto">
      <div className="flex justify-center items-center gap-3 h-full w-auto">
        <label className="block text-sm font-medium text-gray-700">
          <ListOrdered size={"25px"} />
        </label>
        <div className="relative w-full">
          <select
            value={sort}
            className="block appearance-none w-full h-9 bg-white border border-gray-300 text-gray-700 py-1 px-4  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              if (e.target.value === "") {
                return setSort("");
              } else {
                setSort(e.target.value);
                dispatch(sortProductByPrice(filteredItems, e.target.value));
              }
            }}
          >
            <option value="highest"> Price: High to Low</option>
            <option value="lowest">Price: Lowe to high</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default OrderBy;
