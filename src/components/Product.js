import React from "react";
import util from "../utility/util";
import "../styles/card.scss";

export default function Product({
  id,
  name,
  description,
  image,
  price,
  title,
  handleAddProduct,
  InCart,
  handleInCart,
}) {
  return (
    <div className="card">
      <img
        className="activator"
        src={image}
        alt={name}
      />
      <div className="cardContent">
        <h6> {title}</h6>
        <span className="card-price ">
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
            name,
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
