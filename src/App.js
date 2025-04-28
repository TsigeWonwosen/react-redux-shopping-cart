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
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import fetchProductNew from "./utility/fetchProducts";
import SingleProduct from "./components/SingleProduct";
import {
  addToCart,
  deleteFromCart,
  fetchProduct,
  handleCart,
} from "./redux/action/cartAction";

import "./styles/App.scss";
import ScrollToTop from "./components/ScrollToTop";

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
        <div className="min-h-screen flex flex-col bg-white/80">
          <NavBar cartLen={cartLen} />

          <ScrollToTop />
          <Switch>
            <Route
              exact
              path="/"
            >
              <Home
                handleAddProduct={this.handleAddProduct}
                handleInCart={this.props.handleInCart}
                product={this.props.product}
              />
              {/* <VideoBackground /> */}
            </Route>
            <Route
              path="/cart"
              className="h-full flex flex-col"
            >
              <Cart
                deleteFromCart={this.props.deleteFromCart}
                handleAddProduct={this.handleAddProduct}
                className="h-full flex flex-col"
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
            <Route
              exact
              path="/product"
            >
              <ProductContainer
                handleAddProduct={this.handleAddProduct}
                handleInCart={this.props.handleInCart}
                product={this.props.product}
              />
            </Route>
            <Route path="/product/:id">
              <SingleProduct
                handleAddProduct={this.handleAddProduct}
                handleInCart={this.props.handleInCart}
                product={this.props.product}
              />
            </Route>
            <Route component={NotFound} /> {/* 404 fallback */}
          </Switch>
        </div>
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
