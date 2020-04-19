import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProductById,
  sortProductByPrice,
} from "../redux/action/cartAction";
class Filter extends Component {
  render() {
    const count = this.props.Product.length;
    return (
      <div className='row'>
        <div className='col m4'>
          {" "}
          <label>
            {" "}
            <span>{count} Products Found</span>
          </label>
        </div>
        <div className='col m4'>
          <label>
            <span>Order By Price</span>
          </label>
          <div className='input-field'>
            <select
              defaultValue={"DEFAULT"}
              className='form-control browser-default'
              value={this.props.sort}
              onChange={(e) =>
                this.props.sortProductByPrice(
                  this.props.Product,
                  e.target.value
                )
              }
            >
              <option value='DEFAULT' disabled selected>
                Choose your option
              </option>
              <option value='highest'>Lowest to Highest</option>
              <option value='lowest'>Highest to Lowest</option>
            </select>
          </div>
        </div>
        <div className='col m4'>
          <label>
            {" "}
            <span>Filter By Id</span>
          </label>
          <div className='input-field'>
            <select
              defaultValue={"DEFAULT2"}
              className='form-control browser-default'
              value={this.props.id}
              onChange={(e) =>
                this.props.handleFilter(this.props.Product, e.target.value)
              }
            >
              <option value={0}>Select</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={70}>70</option>
              <option value={100}>100</option>
            </select>{" "}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    Product: state.product.items,
    filteredItems: state.product.filteredItems,
    id: state.product.id,
    sort: state.product.sort,
  };
};
const mapActionToProp = (dispatch) => {
  return {
    handleFilter: (Product, id) => dispatch(filterProductById(Product, id)),
    sortProductByPrice: (Product, sort) =>
      dispatch(sortProductByPrice(Product, sort)),
  };
};
export default connect(mapStateToProp, mapActionToProp)(Filter);
