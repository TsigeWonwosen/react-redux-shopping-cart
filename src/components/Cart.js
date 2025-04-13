import React from "react";
import { withRouter } from "react-router-dom";
import util from "../utility/util";
import { connect } from "react-redux";
import {
  handleCart,
  clearFromCart,
  totalCart,
} from "../redux/action/cartAction";
import CartItem from "./CartItem";
import PayPal from "./Paypal";

class Cart extends React.Component {
  componentDidMount() {
    this.props.totalCart();
  }

  render() {
    let {
      carT,
      deleteFromCart,
      totalPrice,
      history,
      clearFromCart,
      resetProduct,
    } = this.props;

    let Tax = parseFloat(totalPrice) * 0.01;
    let Total = parseFloat(Tax) + parseFloat(totalPrice);
    let newTotal = Total.toFixed(2);

    if (carT.length === 0) {
      return (
        <section className='container cart'>
          <header style={{ height: "calc(100vh - 18px)" }}>
            <h3>Your Bag</h3>
            <h4 className='empty-cart'>is currently empty</h4>
          </header>
        </section>
      );
    }

    const renderCart = carT.map((c) => {
      return <CartItem key={c.id} {...c} deleteFromCart={deleteFromCart} />;
    });

    return (
      <section className='container cart'>
        <header>
          <h4>Your Bag</h4>
        </header>
        <article>
          <div>
            <div className='cartHeader row'>
              <div className='col s4 m3'>
                <h5>Title</h5>
              </div>
              <div className='col s4 m3'>
                <h5>Price</h5>
              </div>
              <div className='col s4 m3'>
                <h5>Total</h5>
              </div>
            </div>
            <hr />
          </div>

          <div>{renderCart}</div>
        </article>
        <hr
          style={{
            width: "80%",
            fontSize: "40",
            marginLeft: "10%",
            marginBottom: "1rem",
            border: " 1px solid #3949ab",
          }}
        />

        <footer className='cartFooter'>
          <div className='cart-total'>
            <h4>
              <label>Subtotal</label>
              <span>{util.formatCurrency(totalPrice)}</span>
            </h4>
            <h4>
              <label>Tax</label>
              <span>{util.formatCurrency(Tax)}</span>
            </h4>
            <h4>
              <label>Total</label>
              <span>{util.formatCurrency(Total)}</span>
            </h4>
            <h4>
              <label></label>
              <span>
                <PayPal
                  total={newTotal}
                  clearFromCart={clearFromCart}
                  history={history}
                />
              </span>
            </h4>
          </div>
          <div>
            <button
              className='btn clear-btn'
              onClick={() => {
                resetProduct();
                totalCart();
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
  return {
    handleIn_Cart: (id) => dispatch(handleCart(id)),
    clearFromCart: () => {
      dispatch(clearFromCart());
    },
    totalCart: () => dispatch(totalCart()),

    resetProduct: () => {
      dispatch({ type: "RESET_PRODUCT" });
      dispatch({ type: "CLEAR_CART" });
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(withRouter(Cart));
