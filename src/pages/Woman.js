import React from "react";
import Product from "../components/Product";

export default function Woman({
  product,
  handleAddProduct,
  deleteFromCart,
  handleInCart,
}) {
  const filteredItems = product.filter(
    (prod) =>
      prod.category.toLowerCase().includes("women") ||
      prod.category.toLowerCase().includes("jewelry")
  );
  return (
    <div className="App container max-w-screen-xl mx-auto">
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
