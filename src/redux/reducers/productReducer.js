import ActionTypes from '../constants/ActionTypes';

export const fetchProductsReducer = (state={},action) =>{
     switch(action.type){
        case ActionTypes.FETCH_ALL_PRODUCTS :
            console.log('Product Reducer fetch all products',state);
             return {...state,products:action.payload};
        default:
            return state;

     }
}

export const selectedProductReducer = (state={},action) => {
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...action.payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        case ActionTypes.DELETE_SELECTED_PRODUCT:
            return {...state,...action.payload};
        default:
            return state;
    }
}

export const filteredProductReducer = (state={},action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload};
        default:
            return state;
    }
}
