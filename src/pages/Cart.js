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
        <header className="w-full h-[300px] flex flex-col justify-center items-center gap-4">
          <h3 className="font-semibold text-3xl">Your Cart is empty</h3>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-500/90"
            onClick={() => {
              history.push("/product");
            }}
          >
            Back to Shopping
          </button>
        </header>
      );
    }

    return (
      <section className="flex flex-col justify-start items-center gap-4 rounded-md px-9 w-full min-h-screen  my-8">
        <header className="flex justify-between px-4 py-2 items-center border-[1px] md:w-[80%] w-full h-[60px] border-gray-900/50 gap-2 rounded-md bg-white">
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
        <div className="flex w-full flex-1 justify-between items-start gap-2 bg-white rounded-md md:flex-row flex-col">
          <section className="md:w-3/4 w-full h-full px-3 py-2 rounded-sm shadow-md flex flex-col overflow-auto ">
            <div className="py-3 px-3 md:px-6 w-full flex justify-between items-center border-b-[1px] border-gray-900/30 text-md md:font-semibold font-normal">
              <span></span>
              <h5 className="w-[43%] text-center pr-4 hidden md:block">
                Product
              </h5>
              <h5 className="w-[100px] text-center hidden md:block">Price</h5>
              <h5 className="w-[100px] hidden md:block">Quantity</h5>
              <h5>Total</h5>
            </div>
            <div className="w-full h-full ">
              {carT.map((c) => (
                <CartItem
                  key={c.id}
                  {...c}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </div>
          </section>

          <section className="md:w-1/4 w-full h-full flex flex-col justify-start gap-6 px-3 pt-5 rounded-md shadow-md text-gray-700/90 min-h-[400px]">
            <h3 className="text-center text-2xl font-semibold"> Summary</h3>
            <div className=" flex flex-col gap-2 h-full w-full px-7 py-2 mt-4 bg-gray-50/50">
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
                <label>Paypal</label>
              </section>
              <section className="flex justify-between items-center  border-t-[1px] border-gray-900/30 text-md font-semibold py-3">
                <label>Total</label>
                <span>{util.formatCurrency(Total)}</span>
              </section>
            </div>
            <button
              className="text-white bg-red-500/80 hover:bg-red-500/90  py-3 rounded-md  mb-2 w-[80%] mx-auto font-semibold  px-6 "
              onClick={() => {
                resetProduct();
                totalCart();
                history.push("/product");
              }}
            >
              Clear Cart
            </button>
            <button className="text-white bg-green-500/80 hover:bg-green-500/90  py-3 rounded-md  mb-4 w-[80%] mx-auto font-semibold px-6">
              Proceed to Checkout
            </button>
            <PayPal
              total={newTotal}
              clearFromCart={clearFromCart}
              history={history}
            />
          </section>
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
