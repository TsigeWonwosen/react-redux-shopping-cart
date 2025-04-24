import React from "react";
import productDatas from "../data/Data.json";
import Product from "../components/Product";

function Kids({ product, handleAddProduct, deleteFromCart, handleInCart }) {
  const filteredItems = productDatas.filter((prod) =>
    prod.category.toLowerCase().includes("kid")
  );

  return (
    <div className="container max-w-screen-xl mx-auto">
      <section className="cardContainer">
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

export default Kids;
