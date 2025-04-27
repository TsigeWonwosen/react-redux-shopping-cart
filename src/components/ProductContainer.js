import React from "react";
import Product from "./Product";
import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
import Breadcrumb from "./Breadcrumb";
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
      <SearchAndFilter />
      <section className="cardContainer">
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
