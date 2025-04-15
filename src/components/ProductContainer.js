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
      <hr
        style={{
          width: "80%",
          fontSize: "40",
          margin: "auto",
          marginBottom: "1rem",
          border: " 1px solid rgba(22, 22, 23, 0.21)",
        }}
      />
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
