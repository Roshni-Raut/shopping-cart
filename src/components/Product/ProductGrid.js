import React from 'react'
import { Button } from 'rsuite'
import { showCart } from '../../misc/custom.hooks'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { ProductCard } from '../../pages/styled'

export const ProductGrid = ({product}) => {
    const [cart,dispatch]=showCart() 
    const stock=product.inStock?'In stock':'Out of stock'

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
            <div className="text-wrapper">
            <h1>{product.name}</h1>
            <h2 >${product.price}.00</h2>
            <h3 style={{color:product.inStock?'green':'red'}}>{stock}</h3>
            <Button key={product.id} value={product.id} onClick={addToCart}>
                add to cart
            </Button>
            </div>
        </ProductCard>
    )
}
