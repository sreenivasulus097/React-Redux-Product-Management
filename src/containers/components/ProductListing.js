import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllProducts} from '../../redux/action-creators/productActionCreator';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const fetchedProducts = useSelector(state=>state.allProducts.products);
 console.log('Productlisting fetched products',fetchedProducts);
 const filteredProducts = useSelector(state=>state.filteredProducts);
const dispatch = useDispatch();

 useEffect(()=>{
     console.log("product listing useeffect");
dispatch(fetchAllProducts())
 },[dispatch]);



    return(
    <div className="container product-list">
        {fetchedProducts !== undefined && fetchedProducts !== ""? (
           <ProductComponent/>
        ):'....Loading'}
    </div>
    )
}

export default ProductListing;