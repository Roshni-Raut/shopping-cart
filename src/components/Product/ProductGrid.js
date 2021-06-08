import React from 'react'
import { Button } from 'rsuite'
import IMAGE_NOT_FOUND from '../../image/not-found.png'
import { ProductCard } from '../../pages/styled'

export const ProductGrid = ({product,addToCart}) => {
    const stock=product.inStock?'In stock':'Out of stock'

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
