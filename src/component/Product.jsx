import axios from 'axios'
import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../helper/productCard'

const url = `https://dummyjson.com`

function Product() {
  const [product,setProduct] = useState([])
  const params = useParams()

  const getProduct = async()=> {
    const res = await axios.get(`${url}/products/category/${params.catName}`)
    console.log(`category based products = `, res);
    setProduct(res.data.products)
  }

  useEffect(() => {
    getProduct()
  },[])
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Products</h3>
            </div>
        </div>

        <div className="row">
          {
            product.map((item,index) => {
              return <ProductCard key={index} {...item}/>
            })
          }
        </div>
      
    </div>
  )
}

export default Product 