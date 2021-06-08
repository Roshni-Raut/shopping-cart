import React from 'react'
import { Button } from 'rsuite'
import { showCart } from '../../misc/custom.hooks'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { ProductCard } from '../../pages/styled'

export const ProductGrid = ({product}) => {
    const [cart,dispatch]=showCart() 
    const stock=product.inStock?'in stock':'out of stock'

    const addToCart=(e)=>{
        const pid=e.target.value
        const prod=cart.filter(p=>p.id===pid)
        if(prod[0]){
            dispatch({type:'INCR',pId:pid})
        }
        else{
            dispatch({type:'ADD',pId:pid,qty:1,price:product.price,name:product.name})
        }
    }

    return (
        <ProductCard>
            <div className="img-wrapper">
                <img src={product.thumbnail} alt={IMAGE_NOT_FOUND} height="100" className="image"/>
            </div>
            <h1>{product.name}</h1>
            <h1 >{product.price}</h1>
            <h1 style={{color:product.inStock?'green':'red'}}>{stock}</h1>
            <Button key={product.id} value={product.id} onClick={addToCart}>
                add to cart
            </Button>
        </ProductCard>
    )
}
