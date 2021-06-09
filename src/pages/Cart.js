import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartBtn from '../components/CartBtn'
import CartTable from '../components/CartTable'
import { showCart, useSession } from '../misc/custom.hooks'
import { Product } from '../misc/helper'
import { CartPage, Home, StyledTable } from './styled'

const Cart = () => {
    const [cart,dispatch]=showCart()
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)
    const catId=useSession()
    
    const remove=(e)=>{
        dispatch({type:'REMOVE',pId:e.target.value})
    }
    const decr=(e)=>{
        dispatch({type:'DECR',pId:e.target.value})
    }
    const incr=(e)=>{
        dispatch({type:'INCR',pId:e.target.value})
    }
    useEffect(()=>{
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
    },[cart])
    return (
        <div>
            <CartPage>
                <Home>
                    <Link to={`/category/${catId}`} className="link">Back</Link>
                </Home>
                <CartBtn qty={qty} total={total}/>
                <h1>Checkout</h1>
            </CartPage>
            <StyledTable >
                <tbody>
                <tr id="head">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>   
                {
                    cart.map((p,index)=><CartTable key={index} remove={remove} incr={incr} decr={decr} prod={p}/>)
                }
                </tbody>
            </StyledTable>
        </div>
    )
}

export default Cart
