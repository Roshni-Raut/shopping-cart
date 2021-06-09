import React from 'react'
import {  Button } from 'rsuite'
import { Product } from '../misc/helper'
import IMAGE_NOT_FOUND from '../image/not-found.png'

const CartTable = ({prod,remove,incr,decr}) => {
    const product=Product(prod.id)
    
    return (
            <tr key={product.id}>
                {console.log('carttable render')}
            <td><img src={product.thumbnail} alt={IMAGE_NOT_FOUND}/></td>
            <td>{product.name }</td>
            <td><Button key={`incr${product.id}`} value={product.id} onClick={incr}className="de"> &#8593;</Button>
                    {prod.qty}
                <Button key={`decr${product.id}`}  value={product.id} onClick={decr} className="de">&#8595;</Button></td>
            <td>${product.price}.00</td>
            <td><Button key={`re${product.id}`}  value={product.id} onClick={remove} className="r">remove</Button></td>
            </tr>
    )
}

export default CartTable