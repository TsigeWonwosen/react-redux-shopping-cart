import React from "react";
import Product from "../components/Product";
import filterByCategory from "../utility/filterByCategory";

function Man({ product, handleAddProduct, deleteFromCart, handleInCart }) {
  const filteredItems = filterByCategory(product, "men's");

  return (
    <div className="container max-w-screen-xl mx-auto">
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
