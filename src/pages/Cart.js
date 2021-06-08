import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import CartBtn from '../components/CartBtn'
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
                <li>
                    <CartBtn/>
                </li>
            </ul>
            <p>Products</p>
            <table>

                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>remove</th>
                </tr>
                    
                    {
                        cart.map(p=><tr key={p.id}>
                        <th>{p.id}</th>
                        <th>{p.name }</th>
                        <th>{p.qty}</th>
                        <th>{p.price}</th>
                        <th><Button key={p.id} value={p.id} onClick={remove}>remove</Button></th>
                        </tr>
                    )
                    }
            </table>
        </div>
    )
}

export default Cart
