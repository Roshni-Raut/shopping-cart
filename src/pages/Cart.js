import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import { showCart } from '../misc/custom.hooks'

const Cart = () => {
    const [cart,dispatch]=showCart()
    const remove=(e)=>{
        dispatch({type:'REMOVE',pId:e.target.value})
    }
    return (
        <div>
            Cart
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/:">category</Link>
                </li>
            </ul>
            <p>Products</p>
            <table>
                <tr>
                    <th>name</th>
                    <th>remove</th>
                </tr>
                    {
                        cart.map(p=><tr>
                        <th>{p}</th>
                        <th><Button key={p} value={p} onClick={remove}>remove</Button></th>
                        </tr>
                    )
                    }
            </table>
        </div>
    )
}

export default Cart
