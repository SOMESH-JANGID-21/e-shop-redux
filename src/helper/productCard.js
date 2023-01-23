import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../productContext'


function ProductCard(props) {

    const context = useContext(ProductContext)
    const addToCart = context.productsApi.addToCart

  return (
    
        <div className="col-lg-3 col-md-4 col-sm-6 mb-2 mt-2">
            <div className="card">
                <img src={props.thumbnail} alt="no img" className="card-img-top" />
                <div className="card-body text-center">
                    <h6 className="text-success text-capitalize">{props.title}</h6>
                    <h5 className="text-warning">&#8377; {props.price}</h5>
                    <details>
                        <summary className='text-primary'>Product Description</summary>
                        <p className="card-text text-justify text-secondary">{props.description}</p>
                    </details>
                </div>
                <div className="card-footer">
                    <NavLink to={`/product/${props.id}/category/${props.category}`} className="btn btn-sm btn-outline-primary" title="product details">
                        <i className="bi bi-info-circle-fill"></i>
                    </NavLink>
                    
                    <button className="btn btn-outline-success btn-sm float-end" title='Add to cart'>
                        <i className="bi bi-cart" onClick={()=>addToCart(props)}></i>
                    </button>
                </div>
            </div>
        </div>
    
  )
}

export default ProductCard