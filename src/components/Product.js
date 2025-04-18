import React from "react";
import util from "../utility/util";
import "../styles/card.scss";

export default function Product({
  id,
  description,
  image,
  price,
  title,
  handleAddProduct,
  InCart,
  handleInCart,
}) {
  return (
    <div className="product-card">
      <div className="overflow-hidden w-full rounded-md  aspect-[3/2] min-h-[180px] ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="cardContent">
        <h6> {title}</h6>
        <span className="card-price">
          <h5>Price </h5>
          <h5>{util.formatCurrency(price)}</h5>
        </span>
      </div>
      <button
        disabled={InCart}
        className="btnAdd"
        onClick={() => {
          handleAddProduct({
            id,
            title,
            description,
            image,
            price,
            units: 1,
          });
          handleInCart(id);
        }}
      >
        {!InCart ? "Add To Cart" : "In Cart"}
      </button>
    </div>
  );
}
