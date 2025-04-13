import React from "react";
import util from "../utility/util";

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
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={image}
          alt={name}
        />
      </div>
      <div className="card-content">
        <div className="cardBody">
          <span className="card-title ">
            <h6> {title}</h6>
          </span>
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
    </div>
  );
}
