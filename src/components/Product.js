import React from "react";
import util from "../utility/util";
import "../styles/card.scss";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const handleClick = () => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="product-card">
      <div
        className="overflow-hidden w-full rounded-md  aspect-[3/2] min-h-[180px] cursor-pointer "
        onClick={handleClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="cardContent">
        <h6> {title}</h6>
        <span className="card-price">
          <h4>Price </h4>
          <h5>{util.formatCurrency(price)}</h5>
        </span>
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
    </div>
  );
}
