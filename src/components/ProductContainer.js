import React from "react";
import Product from "./Product";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import { LightbulbIcon } from "lucide-react";
import OrderBy from "./OrderBy";

export default function ProductContainer({
  product,
  handleAddProduct,
  deleteFromCart,
  handleInCart,
}) {
  return (
    <div className="App container bg-white mt-4">
      <Breadcrumb />
      <Header title="All products" />
      <OrderBy />
      <section className="cardContainer">
        {product.length === 0 && (
          <div className="flex justify-center items-center w-auto px-6 py-3 rounded-sm h-full bg-[#FFF3CD]">
            <span className="bg-yellow-400 text-xl mr-2 rounded-full p-1">
              <LightbulbIcon className="text-gray-100 " />
            </span>
            <h1 className="text-lg font-bold text-green-700/60">
              No products were found matching your selection.
            </h1>
          </div>
        )}
        {product.map((prod) => {
          return (
            <Product
              key={prod.id}
              {...prod}
              handleAddProduct={handleAddProduct}
              deleteFromCart={deleteFromCart}
              handleInCart={handleInCart}
            />
          );
        })}
      </section>
    </div>
  );
}
