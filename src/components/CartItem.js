import React from "react";
import { connect } from "react-redux";
import {
  DELETE_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  HANDLE_IN_CART,
  TOTAL_CART,
} from "../redux/action/type";
import util from "../utility/util";

const CartItem = ({
  img,
  price,
  name,
  description,
  total,
  id,
  units,
  dispatch,
  deleteFromCart,
  increase,
  decrease,
  remove,
  InCart,
}) => {
  return (
    <div className='cartItem row container'>
      <img src={img} alt={name} className='col s6 m3' />
      <div className=' cartText col s6 m7'>
        <div className='row'></div>

        <h4 className='col s8 m4'>{name}</h4>
        <div className='col s8 m4'>
          <h6>{description}</h6>
          <h6 className='item-price'>{util.formatCurrency(price)}</h6>
        </div>
        <div className='cartItemButton col s8 m4'>
          <button className='btn remove-btn' onClick={() => remove()}>
            remove
            <i className='material-icons large '>delete_forever</i>
          </button>
        </div>
      </div>
      <div className='col s3 m2'>
        <div className='card-action'>
          <div className='row'>
            <div className='col s6 m6'>
              <button onClick={() => increase()}>
                <i className='material-icons small'>arrow_drop_up</i>
              </button>
              {units}
              <button
                onClick={() => {
                  if (units === 1) {
                    return remove();
                  }
                  return decrease();
                }}
              >
                <i className='material-icons small'>arrow_drop_down</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    carT: store.cart.cart,
    totalPrice: store.cart.totalPrice,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, units } = ownProps;
  return {
    increase: () => dispatch({ type: INCREMENT_CART, payload: id }),
    decrease: () => dispatch({ type: DECREMENT_CART, payload: { id, units } }),
    remove: () => {
      dispatch({ type: DELETE_CART, payload: id });
      dispatch({ type: HANDLE_IN_CART, payload: id });
      dispatch({ type: TOTAL_CART });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
