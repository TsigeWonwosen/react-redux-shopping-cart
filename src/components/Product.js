import React from "react";
import util from "../utility/util";
import "../styles/card.scss";
import { useHistory } from "react-router-dom";
import { Star } from "lucide-react";

export default function Product({
  id,
  description,
  image,
  price,
  title,
  rating,
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
        <h6 className="text-left"> {title}</h6>
        <span className="flex justify-start w-full items-center gap-2">
          {rating?.rate}
          <div className="flex justify-start w-full items-cente gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < rating?.rate
                    ? "text-green-500 fill-green-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[12px] font-normal text-blue-500">
            ({rating?.count})
          </span>
        </span>
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
