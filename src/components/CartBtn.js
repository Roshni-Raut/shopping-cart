import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { showCart } from '../misc/custom.hooks'
import {CartB} from './CardBtn.styled'

const CardBtn = () => {
    const [cart]=showCart()
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)
    
    useEffect(()=>{
        setQty(
            cart.reduce((t,val)=>{
                return t+val.qty
            },0)
        )
        setTotal(
            cart.reduce((t,val)=>{
                return t+(val.price*val.qty)
            },0)
        )
    },[cart])
    return (
        <CartB >
            <Link to="/cart"><span className="circle">{qty}</span>:${total}</Link> 
        </CartB>
    )
}

export default CardBtn
