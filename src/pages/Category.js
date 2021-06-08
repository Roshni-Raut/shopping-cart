import React,{useState,useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import Filter from '../components/Filter'
import { ProductGrid } from '../components/Product/ProductGrid'
import data from '../data/products.json'
import CatData from '../data/categories.json'
import { FlexGrid, Home } from './styled'
import { showCart, useSession } from '../misc/custom.hooks'
import { CartB } from '../components/CardBtn.styled'
import { Product } from '../misc/helper'

const Category = () => {
    const {catId}=useParams()
    const category=CatData.filter(c=>c.id===catId)
    const [filCon,setFilCon]=useState([])
    const [product,setProduct]=useState([])
    const [cart,dispatch]=showCart() 
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)

    useSession(catId)

    const addToCart=(e)=>{
        const pid=e.target.value
        const prod=cart.filter(p=>p.id===pid)
        if(prod[0]){
            dispatch({type:'INCR',pId:pid})
        }
        else{
            dispatch({type:'ADD',pId:pid,qty:1,price:product.price,name:product.name})
        }
    }
    const onFilter=(ev)=>{
        const val=ev.target.value
        if(filCon.includes(val)){
            setFilCon(filCon.filter(v=>v!==val))
        }else{
            setFilCon([...filCon,val])
        }
    }
    useEffect(()=>{
        
            switch(filCon.length){
                case 1: setProduct( filCon[0]==="price" ? 
                                        data.filter(d=> d.categoryId===catId && d.price<100):
                                        data.filter(d=> d.categoryId===catId && d.inStock))
                        break;
                case 2: setProduct(data.filter(d=> d.categoryId===catId && d.price<100 && d.inStock))
                        break;
                default: setProduct(data.filter(d=> d.categoryId===catId))
            }
            setQty(
                cart.reduce((t,val)=>{
                    return t+val.qty
                },0)
            )
            setTotal(
                cart.reduce((t,val)=>{
                    const p=Product(val.id)
                    return t+(p.price*val.qty)
                },0)
            )
        
        
    },[filCon,catId,cart])
    return (
        <div >
            <Link to="/"><Home>Home</Home></Link>
            <CartB >
            <Link to="/cart" className="link"><span className="circle">{qty}</span> &nbsp; ${total}</Link> 
            </CartB>
            <h1 align="center" color="blue">{category[0].name}</h1>
            <h3 align="center">{category[0].description}</h3>
                <Filter onFilter={onFilter} />
                <FlexGrid >
                    {product.length>0 && product.map(prod=> 
                            <ProductGrid
                            product={prod}
                            key={prod.id}
                            addToCart={addToCart}
                            />
                            )
                        }
                    {product.length===0 && <h2>no result found</h2>}
                </FlexGrid>
        </div>
    )
}

export default Category
