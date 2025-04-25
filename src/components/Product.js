import React from "react";
import util from "../utility/util";
import "../styles/card.scss";
import { useHistory } from "react-router-dom";
import Rating from "./Rating";
import { Heart } from "lucide-react";

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
    <div className="product-card relative">
      <div
        className="overflow-hidden w-full rounded-md  aspect-[3/2] min-h-[180px] cursor-pointer bg-[#fefef] flex justify-center items-center"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={title}
          className="w-[80%] h-[80%] object-cover object-top hover:scale-105 transition-all duration-300 z-10"
        />
      </div>
      <div className="cardContent">
        <section className="w-full h-full">
          <h6 className="text-left w-full font-medium"> {title}</h6>
          <p className="text-gray-400 font-light text-left line-clamp-1 text-[12px]">
            {description}
          </p>
        </section>
        <span className="flex justify-start w-full items-center gap-2">
          <p className="text-[12px]">{rating?.rate}</p>
          <Rating rate={rating.rate} />
          <span className="text-[12px] font-normal text-blue-500">
            ({rating?.count})
          </span>
        </span>
        <span className="flex justify-between items-center w-full py-2">
          <h5>{util.formatCurrency(price)}</h5>
          <button
            disabled={InCart}
            className="bg-transparent border-[1px] border-green-300 px-2 py-[2px] rounded-md text-green-500 hover:text-green-700 hover:border-green-700 transition-all duration-300"
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
            <p className="text-[13px]">
              {" "}
              {!InCart ? "Add to Cart" : "In Cart"}
            </p>
          </button>
        </span>
      </div>
      <div className="absolute top-[7px] right-[12px] w-7 h-7 bg-white/50 shadow-md rounded-full z-10 flex justify-center items-center">
        <Heart className="w-4 h-4 text-green-400 fill-green-100" />
      </div>
    </div>
  );
}
