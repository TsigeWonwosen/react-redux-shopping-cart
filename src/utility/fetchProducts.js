// fetchProducts.js

import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../redux/action/cartAction';
function fetchProducts() {

    console.log("Hiiiiiiiiii")
    return dispatch => {
        
        dispatch(fetchProductsPending());
        console.log("Pending .. . ")
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            console.log(res)
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
    console.log("Error ....")

            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchProducts;