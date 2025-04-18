import React from "react";
import Product from "./Product";
import Filter from "./Filter";
export default function ProductContainer({
  product,
  handleAddProduct,
  deleteFromCart,
  handleInCart,
}) {
  return (
    <div className="App container">
      <Filter />

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
