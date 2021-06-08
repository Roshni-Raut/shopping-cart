import React from 'react'
import { Button, Icon } from 'rsuite'
import { Product } from '../misc/helper'
import IMAGE_NOT_FOUND from '../image/not-found.png'

const CartTable = ({prod,remove}) => {
    const product=Product(prod.id)
    
    return (
            <tr key={product.id}>
            <td><img src={product.thumbnail} alt={IMAGE_NOT_FOUND}/></td>
            <td>{product.id}</td>
            <td>{product.name }</td>
            <td>{prod.qty}</td>
            <td>{product.price}</td>
            <td><Button key={product.id} value={product.id} onClick={remove}>a<Icon icon="close"/></Button></td>
            </tr>
    )
}

export default CartTable