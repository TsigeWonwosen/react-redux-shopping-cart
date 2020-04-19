import React from "react";
import { withRouter } from "react-router-dom";
import util from "../utility/util";
import { connect } from "react-redux";
import {
  handleCart,
  deleteFromCart,
  clearFromCart,
  totalCart,
  addToCart,
} from "../redux/action/cartAction";
import CartItem from "./CartItem";

class Cart extends React.Component {
  componentDidUpdate() {
    this.props.totalCart();
  }
  render() {
    const {
      carT,
      deleteFromCart,
      totalPrice,
      history,
      clearFromCart,
      handleAddProduct,
    } = this.props;

    if (carT.length === 0) {
      return (
        <section className='cart container'>
          <header>
            <h2>Your Bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
          </header>
        </section>
      );
    }

    const renderCart = carT.map((c) => {
      return <CartItem key={c.id} {...c} deleteFromCart={deleteFromCart} />;
    });

    // clearFromCart();
    // // carT.forEach((cart) => handleAddProduct(cart));
    // totalCart();

    return (
      <section class='cart'>
        <header>
          <h2>Your Bag</h2>
        </header>
        <article>
          <div>{renderCart}</div>
        </article>
        <hr
          style={{
            width: "80%",
            fontSize: "40",
            marginLeft: "7%",
            marginBottom: "1rem",
            border: " 1px solid #3949ab",
          }}
        />

        <footer className='cartFooter'>
          <div className='cart-total'>
            <h4>
              Total <span>{util.formatCurrency(totalPrice)}</span>
            </h4>
          </div>
          <div>
            <button
              className='btn clear-btn'
              onClick={() => {
                clearFromCart();
                history.push("/product");
              }}
            >
              Clear Cart
            </button>
          </div>
        </footer>
      </section>
    );
  }
}
function mapStateToProps(store) {
  return {
    carT: store.cart.cart,
    totalPrice: store.cart.totalPrice,
  };
}
const mapActionToProps = (dispatch, ownProps) => {
  // const { cart } = ownProps;
  return {
    handleIn_Cart: (id) => dispatch(handleCart(id)),
    clearFromCart: () => {
      dispatch(clearFromCart());
      // dispatch(addToCart(cart));
    },
    totalCart: () => dispatch(totalCart()),
  };
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(Cart));
