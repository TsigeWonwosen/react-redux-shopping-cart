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
import { CircleCheck, MoveLeft } from "lucide-react";

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
        <header className="max-w-3xl mx-auto  w-full h-[300px] flex flex-col justify-center items-center gap-4">
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
      <section className="flex flex-col justify-start items-center gap-4 rounded-md px-9 w-full min-h-screen  my-8 max-w-screen-xl mx-auto">
        <header className="flex justify-between px-4 py-2 items-center border-[1px] md:w-[80%] w-full min-h-[60px] border-gray-900/50 gap-2 rounded-md bg-white">
          <div className="flex justify-start  items-center gap-2">
            <CircleCheck className="text-green-400" />
            <h4>{carT[carT.length - 1].title}has been added to your cart.</h4>
          </div>
          <button
            className="bg-green-700/80 rounded-md px-3 py-2 text-white text-sm"
            onClick={() => {
              history.push("/product");
            }}
          >
            Continue Shopping
          </button>
        </header>
        <div className="flex w-full flex-1 justify-between items-start gap-2 bg-white rounded-md lg:flex-row flex-col">
          <div className="flex flex-col justify-start items-start w-full h-full lg:w-3/4">
            <section className="w-full h-full px-3 py-2 rounded-sm  flex flex-col overflow-auto ">
              <div className="py-3 px-3 md:px-6 w-full flex justify-between items-center border-b-[1px] border-gray-900/30 text-md md:font-medium font-normal">
                <span className="w-[10%]"></span>
                <h5 className="w-[50%] text-center pr-4 hidden md:block ">
                  Product
                </h5>
                <h5 className="w-[10%] text-center hidden md:block">Price</h5>
                <h5 className="w-[15%] hidden md:block text-center">
                  Quantity
                </h5>
                <h5 className="md:w-[10%] text-right pr-2 md:pr-0  w-auto">
                  SubTotal
                </h5>
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
            <div className="w-full h-auto flex justify-end items-start  mt-4  px-4">
              <button
                className=" flex justify-center items-center gap-2 text-green-800 hover:text-green-600 text-md border-[1px] border-green-900/80 hover:border-green-500/90  py-1 rounded-sm  w-auto  font-semibold px-3 transition-all duration-300"
                onClick={() => history.push("/product")}
              >
                <MoveLeft />
                Back to basket
              </button>
            </div>
          </div>

          <section className="lg:w-1/4 w-full h-full flex flex-col justify-start items-center gap-6 px-3 pt-5 rounded-md shadow-md text-gray-700/90 min-h-[400px]">
            <h3 className="text-left w-full px-7 text-2xl font-semibold">
              Summary
            </h3>
            <div className=" flex flex-col gap-2 h-full w-full px-7 py-2 mt-4 bg-gray-50/50">
              <section className="flex justify-between items-center">
                <label className="text-[#191919] font-normal">Subtotal</label>
                <span>{util.formatCurrency(totalPrice)}</span>
              </section>
              <section className="flex justify-between items-center">
                <label className="text-[#191919] font-normal">Tax</label>
                <span>{util.formatCurrency(Tax)}</span>
              </section>
              <section className="flex justify-between items-center">
                <label className="text-[#191919] font-normal">Shipping</label>
                <span>Free</span>
              </section>

              <section className="flex justify-between items-center  border-t-[1px] border-gray-900/30  py-3">
                <label className="text-lg font-semibold">Total</label>
                <span className="text-lg font-semibold">
                  {util.formatCurrency(Total)}
                </span>
              </section>
            </div>
            <div className="w-full h-full  mb-4">
              <PayPal
                total={newTotal}
                clearFromCart={clearFromCart}
                history={history}
              />
              <button
                className="text-white/80 bg-red-900 text-md hover:bg-red-800/90  py-[7px] rounded-md  w-full mb-1 mx-auto font-medium  px-6 max-w-3xl transition-all duration-300"
                onClick={() => {
                  resetProduct();
                  totalCart();
                  history.push("/product");
                }}
              >
                Clear Cart
              </button>
            </div>
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
