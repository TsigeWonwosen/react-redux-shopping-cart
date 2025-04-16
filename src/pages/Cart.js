import React from "react";
import { withRouter } from "react-router-dom";
import util from "../utility/util";
import { connect } from "react-redux";
import {
  handleCart,
  clearFromCart,
  totalCart,
} from "../redux/action/cartAction";
import CartItem from "../components/CartItem";
import PayPal from "../components/Paypal";
import { CircleCheck } from "lucide-react";

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
        <section className="container cart">
          <header style={{ height: "calc(100vh - 18px)" }}>
            <h3>Your Bag</h3>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      );
    }
    const renderCart = carT.map((c) => {
      console.log(c);
      return (
        <CartItem
          key={c.id}
          {...c}
          deleteFromCart={deleteFromCart}
        />
      );
    });

    return (
      <section className="flex flex-col justify-center items-center my-9 gap-4 rounded-md  px-9 w-full h-full">
        <header className="flex justify-between px-4 py-2 items-center border-[1px] w-[80%] h-[60px] border-gray-900/50 gap-2 rounded-md bg-white">
          <div className="flex justify-start  items-center gap-2">
            <CircleCheck className="text-green-400" />
            <h4>{carT[carT.length - 1].title}has been added to your cart.</h4>
          </div>
          <button
            className="btn"
            onClick={() => {
              history.push("/product");
            }}
          >
            Continue Shopping
          </button>
        </header>
        <div className="w-full h-full flex  justify-start items-center gap-2  bg-red-600/30 rounded-md">
          <article className="w-3/4 px-3 py-2 mt-4">
            <div className=" bg-white shadow-md rounded-sm p-4 w-[100%] flex justify-between items-center">
              <div className="">
                <h5>Product</h5>
              </div>
              <div className="">
                <h5>Price</h5>
              </div>
              <div className="">
                <h5>Total</h5>
              </div>
            </div>
            <div className="w-full h-full bg-white ">{renderCart}</div>
          </article>

          <footer className="w-1/4 h-[100%] flex flex-col justify-center bg-green-500/35 py-5">
            <div className=" h-full w-full px-3 py-2 mt-4">
              <section className="flex justify-between items-center">
                <label>Subtotal</label>
                <span>{util.formatCurrency(totalPrice)}</span>
              </section>
              <section className="flex justify-between items-center">
                <label>Tax</label>
                <span>{util.formatCurrency(Tax)}</span>
              </section>
              <section className="flex justify-between items-center">
                <label>Total</label>
                <span>{util.formatCurrency(Total)}</span>
              </section>
              <section className="flex justify-between items-center">
                <label></label>
                <span>
                  <PayPal
                    total={newTotal}
                    clearFromCart={clearFromCart}
                    history={history}
                  />
                </span>
              </section>
            </div>
            <div className="flex justify-center items-center mt-4 w-full">
              <button
                className="btn clear-btn"
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
        </div>
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
