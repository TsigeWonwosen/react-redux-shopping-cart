import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Kids from "./pages/Kids";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Footer from "./components/Footer";
import ProductContainer from "./components/ProductContainer";
import {
  addToCart,
  deleteFromCart,
  fetchProduct,
  handleCart,
} from "./redux/action/cartAction";
import "./styles/App.scss";

import fetchProductNew from "./utility/fetchProducts";
import Home from "./components/Home";

class App extends React.Component {
  handleAddProduct = (product) => {
    this.props.addToCart(product);
  };

  componentDidMount() {
    fetchProductNew();
    this.props.fetchProduct();
  }

  render() {
    const cartLen =
      this.props.cart && this.props.cart.reduce((a, b) => a + b.units, 0);

    return (
      <Router>
        <NavBar cartLen={cartLen} />

        <Switch>
          <Route
            exact
            path="/"
          >
            <Home />
            {/* <VideoBackground /> */}
          </Route>
          <Route path="/cart">
            <Cart
              deleteFromCart={this.props.deleteFromCart}
              handleAddProduct={this.handleAddProduct}
            />
          </Route>
          <Route path="/kids">
            <Kids
              handleAddProduct={this.handleAddProduct}
              handleInCart={this.props.handleInCart}
              product={this.props.product}
            />
          </Route>
          <Route path="/woman">
            <Woman
              handleAddProduct={this.handleAddProduct}
              handleInCart={this.props.handleInCart}
              product={this.props.product}
            />
          </Route>
          <Route path="/man">
            <Man
              handleAddProduct={this.handleAddProduct}
              handleInCart={this.props.handleInCart}
              product={this.props.product}
            />
          </Route>
          <Route path="/product">
            <ProductContainer
              handleAddProduct={this.handleAddProduct}
              handleInCart={this.props.handleInCart}
              product={this.props.product}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  product: state.product.filteredItems,
});

const mapActionToProps = (dispatch, ownProps) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
    fetchProduct: () => dispatch(fetchProduct()),
    handleInCart: (id) => dispatch(handleCart(id)),
    fetchProductNew: dispatch(fetchProductNew()),
  };
};

export default connect(mapStateToProps, mapActionToProps)(App);
