import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router';
import {selectedProduct, removeSelectedProduct,deleteSelectedProduct, setProducts} from '../../redux/action-creators/productActionCreator';


const ProductDetails = (props) => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const delResponse = useSelector(state=>state);
    
    useEffect(()=>{
    dispatch(selectedProduct(productId));
    return()=>{
        dispatch(removeSelectedProduct());
    }
    },[productId]);
    

    const deleteProductHandler = (productId) => {
        console.log("delete product handler in product details page");
      dispatch(deleteSelectedProduct(productId));
    
      console.log("delete handler",delResponse);
      const {id} = delResponse.product;
      console.log(id);
      if(id !== undefined && id !== '' && id !== 'undefined'){
          alert("Product Has been deleted Successfully");
          const filteredProducts = delResponse.allProducts.products.filter((product)=>  product.id !== id);
          dispatch(setProducts(filteredProducts));
         props.history.push('/');
      }
    }

const productState = useSelector((state)=>state.product);

const {id,image,description,title,price} = productState;
    return(
        <div className="container product-list">
        {id !== undefined && id !== 'undefined' && id !== ''?(
             <div className="row">
             <div className="col">
             <div className="card" style={{width:"18rem"}}>
                 <img src={image} className="card-img-top" alt={title}></img>
                 <div className="card-body">
                   <p className="card-text">{price}<br/>{description}</p>
                 </div>
               </div>
               </div>
             </div>
        ):''}
    {props.location.pathname.includes('delete') ?(
        <div>
            <h4>Are you sure you want to delete this product?</h4>
            <button onClick={()=>deleteProductHandler(productId)}>Delete Product</button>
        </div>
    ):''}
       
    </div>
    );
}

export default ProductDetails;