import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const ProductComponent = () => {  
    const productsFetched = useSelector(state=>state.allProducts.products); 
    const filteredProducts = useSelector(state=>state.filteredProducts.products);


 
    return(
    <div className="row">
        {

filteredProducts !== undefined && filteredProducts !== "undefined" && Object.keys(filteredProducts).length ? 
(filteredProducts.map((product)=>{
  const {id,title,price,image}= product;
return(
  <div className="col" key={id}>
      <Link to={`/product/${id}`}>
  <div className="card" style={{width:"18rem"}}>
  <img src={image} className="card-img-top" alt={title}></img>
  <div className="card-body">
    <p className="card-text">{price}<br/>{title}</p>
  </div>
</div>
</Link>
<div><Link to={`/product/delete/${id}`}>Delete</Link></div>
</div>

 )   
}

)) 

: 
(productsFetched.map((product)=>{
  const {id,title,price,image}= product;
return(
  <div className="col" key={id}>
      <Link to={`/product/${id}`}>
  <div className="card" style={{width:"18rem"}}>
  <img src={image} className="card-img-top" alt={title}></img>
  <div className="card-body">
    <p className="card-text">{price}<br/>{title}</p>
  </div>
</div>
</Link>
<div><Link to={`/product/delete/${id}`}>Delete</Link></div>
</div>

 )   
}

))

        
       
          

            
        }
           </div> 
       
   
    )


}

export default ProductComponent;