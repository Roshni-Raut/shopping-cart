import React from 'react'
import { Link } from 'react-router-dom'
import {CartB} from './CardBtn.styled'

const CartBtn = ({qty,total}) => {
    
    return (
        <CartB >
            <Link to="/cart" className="link"><span className="circle">{qty}</span> &nbsp; ${total}</Link> 
        </CartB>
    )
}

export default CartBtn
