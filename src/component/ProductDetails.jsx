import axios from 'axios'
import React, { useState,useCallback, useEffect, useContext } from 'react'
import { useParams,NavLink } from 'react-router-dom'
import { ProductContext } from '../productContext'

const url = 'https://dummyjson.com'

function ProductDetails() {
  const params = useParams()
  const context = useContext(ProductContext)

  const [product,setProduct] = useState([])
  const addToCart = context.productsApi.addToCart

  const getSingle = async()=> {
    const res = await axios.get(`${url}/products/${params.id}`)
    setProduct(res.data)
  }

  const fetchProduct = useCallback(()=>{
      getSingle()
  });

  useEffect(()=>{
    fetchProduct()
  })
  return (
    <div className='container'>
        <div className="row mt-4 mb-3">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Product Details</h3>
            </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {/* start  */}
                <div className="carousel slide" id="pro" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='0' className='active'></button>
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='1'></button>
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='2'></button>
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='3'></button>
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='4'></button>
                    <button type='button' data-bs-target='#pro' data-bs-slide-to='5'></button>
                  </div>
                  {/* carousel images  */}
                  {/* <div className="carousel-inner" style={{height:'300px'}}> */}
                  <div className="carousel-inner" >
                    <div className="carousel-item active">
                      <img src={product.thumbnail} alt="no image found" className="d-block w-100" />
                    </div>
                    {
                      product.images && product.images.map((item,index)=>{
                        return(
                          <div className="carousel-item" key={index}>
                            <img src={item} alt="no image found" className="d-block w-100" /> 
                          </div>
                        )
                      })
                    }
                  </div>
                  {/* left and right control */}
                  <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target="#pro"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Privious</span>
                  </button>
                  <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target="#pro"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* End  */}

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <strong className="text-secondary ">{product.category}</strong>
            <h4 className="display-3 text-success">{product.title}</h4>
            <div className="mt-2 mb-2">
              <h5 className="text-success">&#8377; {product.price}</h5>
              <p className="text-warning mt-2 mb-2">Discount : {product.discountPercentage}%</p>
            </div>
            <h6 className="text-danger">Description</h6>
            <p className="text-secondary text-justify">{product.description}</p>
          
            <div className="mt-2 mb-2">
              <p className="float-end">
                <strong className="text-primary">Stock</strong>  
                <span className="text-primary"> { product.stock} items</span>
              </p>  
            </div>  

            <div className="mt-2 mb-2">
              <p className="text-warning">Rating <strong className='text-success'>  { product.rating}</strong></p>  
            </div>  

            <h5 className=" text-info">Brand <span className="text-dark"> { product.brand}</span> </h5> 

            <div className="mt-2 mb-2">
              <NavLink className="btn btn-outline-info" to={`/products/${product.category}`}>
                  Similar product
              </NavLink>  
              <button onClick={()=>addToCart(product)} className="btn btn-outline-success float-end">
                Add to cart
              </button>
            </div>    
          </div>
        </div>
      
    </div>
  )
}

export default  ProductDetails