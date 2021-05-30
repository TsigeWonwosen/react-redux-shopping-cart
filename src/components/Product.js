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
      <div className='card-content'>
        <div className='cardBody'>
          <span className='card-title activator grey-text text-darken-4'>
            <div>
              <h6> {description}</h6>
            </div>
            <div>
              <i className='material-icons  small'>business_center</i>
            </div>
          </span>
          <span className='card-title activator grey-text text-darken-4'>
            <div>
              <h4>Price </h4>
            </div>
            <div>
              {" "}
              <h5>{util.formatCurrency(price)}</h5>
            </div>
          </span>
        </div>
        <button
          disabled={InCart ? true : false}
          onClick={() => {
            handleAddProduct({ id, name, description, img, price, units: 1 });
            handleInCart(id);
          }}
          className='waves-effect  btn-small'
        >
          {!InCart ? "Add To Cart" : "In Cart"}
        </button>
      </div>
    </div>
  );
}
