import axios from 'axios'
import {useState,useMemo,useEffect} from 'react'
import { toast } from 'react-toastify'


const url = `https://dummyjson.com`


function useProductsApi() {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    //states to calculation of cart subtotal,total,tax,delevery charges
    const [subTotal,setSubTotal] = useState(0)
    const [discount,SetDiscount] = useState(0)
    const [gst,setGst] = useState(5)
    const [dc,setDc] = useState(50)

    const readProducts = async()=>{
        const out = await axios.get(`${url}/products`)
        // console.log('products =',out)
        setProducts(out.data.products)
        
    }

    const initValue = useMemo(()=>(
        {value:[products,setProducts]}
    ))

    useEffect(()=>{
        readProducts()
    },[])

    //add product to cart
    const addToCart = async (Product) => {
      console.log('cart = ',Product)
      //product exist in cart or not
      const check = cart.every(item=>{
        return item.id !== Product.id;
      });

      if(check){
        toast.success('product added to cart');
        setCart([...cart, {...Product,quantity:1}])
      }else{
        toast.warning('product already in cart')
      }
    }

  return {
    products : initValue,
    cart: [cart,setCart],
    addToCart:addToCart,
    subTotal:[subTotal,setSubTotal],
    gst:[gst,setGst],
    dc:[dc,setDc],
    discount:[discount,SetDiscount]

  }
}

export default useProductsApi
