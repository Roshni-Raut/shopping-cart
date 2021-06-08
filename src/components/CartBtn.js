import React from 'react'
import { Link } from 'react-router-dom'
import { useTotal } from '../misc/cartBtn.context'
import {CartB} from './CardBtn.styled'

const CardBtn = () => {
    const [qty,total]=useTotal()
    console.log('qty:',qty)
    console.log('total:',total)
    return (
        <CartB >
            <Link to="/cart" className="link"><span className="circle">{qty}</span> &nbsp; ${total}</Link> 
        </CartB>
    )
}

export default CardBtn
