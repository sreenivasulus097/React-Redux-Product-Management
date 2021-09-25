import {combineReducers} from 'redux';
import {fetchProductsReducer, selectedProductReducer, filteredProductReducer} from './productReducer';

const reducers = combineReducers({
    allProducts : fetchProductsReducer,
    product : selectedProductReducer,
    filteredProducts : filteredProductReducer

})

export default reducers;