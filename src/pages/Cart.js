import React from 'react'
import { Link } from 'react-router-dom'
import CartBtn from '../components/CartBtn'
import CartTable from '../components/CartTable'
import { showCart, useSession } from '../misc/custom.hooks'
import { StyledTable } from './styled'

const Cart = () => {
    const [cart,dispatch]=showCart()
    const catId=useSession()
    const remove=(e)=>{
        dispatch({type:'REMOVE',pId:e.target.value})
    }
    return (
        <div>
            <CartBtn/>
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
