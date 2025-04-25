import React from "react";
import Product from "./Product";
import Filter from "./Filter";
import Header from "./Header";
export default function ProductContainer({
  product,
  handleAddProduct,
  deleteFromCart,
  handleInCart,
}) {
  return (
    <div className="App container bg-white mt-4">
      <Filter />

      <Header title="All products" />
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
