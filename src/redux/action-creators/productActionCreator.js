
import ActionTypes from '../constants/ActionTypes';
import {fakestoreapi} from '../../apis/fakestoreapi'; 



export const fetchAllProducts = () =>{
    return async function (dispatch,getState){
        const response = await fakestoreapi.get('/products');
        console.log("fetch all products action creator",response.data);
        dispatch({type:ActionTypes.FETCH_ALL_PRODUCTS,payload:response.data});
    }
}


export const selectedProduct = (productId) => {
 return async function (dispatch,getState){
  const response = await fakestoreapi.get(`/products/${productId}`);
  console.log(response.data);
    dispatch({
        type : ActionTypes.SELECTED_PRODUCT,
        payload : response.data
    })
 }

}

export const removeSelectedProduct = () => {
 return {
    type : ActionTypes.REMOVE_SELECTED_PRODUCT,
}
    
 }


 export const deleteSelectedProduct = (deleteProductId) =>{
    return async function (dispatch,getState){
        const response = await fakestoreapi.delete(`/products/${deleteProductId}`);
        console.log(response);
        dispatch({type:ActionTypes.DELETE_SELECTED_PRODUCT,payload:response.data});
    }
}

export const setProducts = (products) =>{
    console.log("set product action creator",products);
    return function (dispatch,getState){
        dispatch({
            type:ActionTypes.SET_PRODUCTS,
            payload:products
        })
    }
}