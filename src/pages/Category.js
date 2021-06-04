import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Icon } from 'rsuite'
import data from '../data/products.json'
import { showCart } from '../misc/custom.hooks'

const Category = () => {
    const [cart,dispatch]=showCart()    

    const {catId}=useParams();
    const addToCart=(e)=>{
        const pid=e.target.value
        console.log(cart[0])
        const product=cart.filter(c=>c[0]===pid)
        if(product){
            dispatch({type:'ADD',pId:pid,qty:product[1]+1})
            console.log('already exists')
        }
        else
            dispatch({type:'ADD',pId:pid,qty:1})
    }
    return (
        <div>
            <Button>
                <Icon icon="home"/><Link to="/">Home</Link>
            </Button>
            <Button>
                <Icon icon="cart"/><Link to="/cart">cart</Link>
            </Button>
            <p>category</p>
            {
                data.filter(d=> d.categoryId===catId).map(d=> 
                    <Button key={d.id} value={d.id} onClick={addToCart}>
                        {d.name}
                    </Button>
                )
            }
        </div>
    )
}

export default Category
