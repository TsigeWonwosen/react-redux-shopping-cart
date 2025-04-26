import React from "react";
import Product from "./Product";
import Filter from "./Filter";
import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
export default function ProductContainer({
  product,
  handleAddProduct,
  deleteFromCart,
  handleInCart,
}) {
  const categories = ["Men", "Women", "Kid", "Electronics", "Jewelry"];
  const onSearch = (value) => {
    console.log("Search : " + value);
  };
  const onCategoryChange = (item) => {
    console.log("Category :" + item);
  };

  return (
    <div className="App container bg-white mt-4">
      <Filter />
      <Header title="All products" />
      <SearchAndFilter
        categories={categories}
        onCategoryChange={onCategoryChange}
        onSearch={onSearch}
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
