import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartBtn from '../components/CartBtn'
import CartTable from '../components/CartTable'
import { showCart, useSession } from '../misc/custom.hooks'
import { Product } from '../misc/helper'
import { StyledTable } from './styled'

const Cart = () => {
    const [cart,dispatch]=showCart()
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)
    const catId=useSession()
    
    const remove=(e)=>{
        dispatch({type:'REMOVE',pId:e.target.value})
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
            <CartBtn qty={qty} total={total}/>
            Cart
                <Link to={`/category/${catId}`}>Back</Link>
            <p>Products</p>
            <StyledTable >
                <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>remove</th>
                </tr>   
                {
                    cart.map(p=><CartTable key={p.id} remove={remove} prod={p}/>)
                }
                </tbody>
            </StyledTable>
        </div>
    )
}

export default Cart
