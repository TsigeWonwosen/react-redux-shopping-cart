import React from "react";
import Product from "../components/Product";

function Man({ product, handleAddProduct, deleteFromCart, handleInCart }) {
  const filteredItems = product.filter((prod) =>
    prod.category.toLowerCase().includes("men")
  );
  return (
    <div className="container">
      <h2>Only Man Page.</h2>
      <section className="container cardContainer">
        {filteredItems.length === 0 && (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )}
        {filteredItems.length > 0 &&
          filteredItems.map((prod) => {
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

export default Man;
