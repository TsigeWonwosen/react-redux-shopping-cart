import React, { useState } from "react";
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
  units,
  increase,
  decrease,
  remove,
}) => {
  const [show, setShow] = useState(true);
  const itemRender = () => (
    <div className='cartItem row container'>
      <img src={img} alt={name} className='col s6 m3' />
      <div className='col s6 m7'>
        <div className='cartText row'>
          <div className='col s8 m5'>
            <div className='itemDescription'>
              <h5>{name}</h5>
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                <i className='material-icons tiny '>
                  {!show ? "arrow_drop_up" : "arrow_drop_down"}
                </i>
              </button>
            </div>

            <h6 style={{ display: !show ? "block" : "none" }}>{description}</h6>
          </div>
          <div className='itemPrice col s8 m3'>
            <h6 className='item-price'>{util.formatCurrency(price)}</h6>
          </div>
          <div className='itemPrice col s8 m4'>
            <h6 className='item-price'>{util.formatCurrency(total)}</h6>
          </div>
        </div>
      </div>

      <div className='cartItemButton col s8 m2'>
        <button onClick={() => remove()}>
          <i className='material-icons tiny remove '>delete_forever</i>
        </button>

        <div className='card-action'>
          <button onClick={() => increase()}>
            <i className='material-icons tiny'>add</i>
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
            <i className='material-icons tiny'>indeterminate_check_box</i>
          </button>
        </div>
      </div>
    </div>
  );
  return <div>{itemRender()}</div>;
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
    increase: () => {
      dispatch({ type: INCREMENT_CART, payload: id });
      dispatch({ type: TOTAL_CART });
    },
    decrease: () => {
      dispatch({ type: DECREMENT_CART, payload: { id, units } });
      dispatch({ type: TOTAL_CART });
    },
    remove: () => {
      dispatch({ type: DELETE_CART, payload: id });
      dispatch({ type: HANDLE_IN_CART, payload: id });
      dispatch({ type: TOTAL_CART });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
