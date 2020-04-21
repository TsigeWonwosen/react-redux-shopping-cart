import React from "react";
import util from "../utility/util";

export default function Product({
  id,
  name,
  description,
  img,
  price,
  handleAddProduct,
  InCart,
  handleInCart,
}) {
  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={img} alt={name} />
      </div>
      <div className='card-content' style={{ position: "relative" }}>
        <span className='card-title activator grey-text text-darken-4'>
          {description}
          <i className='material-icons right small'>business_center</i>
        </span>
        <span className='card-title activator grey-text text-darken-4'>
          {" "}
          Price : {util.formatCurrency(price)}
        </span>

        <button
          disabled={InCart ? true : false}
          onClick={() => {
            handleAddProduct({ id, name, description, img, price, units: 1 });
            handleInCart(id);
          }}
          className='waves-effect  btn-small'
          style={{ position: "absolute", bottom: "-8px", left: "20%" }}
        >
          {!InCart ? "Add To Cart" : "In Cart"}
        </button>
      </div>
    </div>
  );
}
