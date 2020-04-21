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
    <div className='App container'>
      <Filter />
      <hr
        style={{
          width: "80%",
          fontSize: "40",
          marginLeft: "7%",
          marginBottom: "1rem",
          border: " 1px solid #3949ab",
        }}
      />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
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
