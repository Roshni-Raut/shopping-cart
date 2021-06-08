import React,{useState,useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import { Icon } from 'rsuite'
import CartBtn from '../components/CartBtn'
import Filter from '../components/Filter'
import { ProductGrid } from '../components/Product/ProductGrid'
import data from '../data/products.json'
import CatData from '../data/categories.json'
import { FlexGrid } from './styled'
import { useSession } from '../misc/custom.hooks'

const Category = () => {
    const {catId}=useParams()
    const category=CatData.filter(c=>c.id===catId)
    const [filCon,setFilCon]=useState([])
    const [product,setProduct]=useState([])
    useSession(catId)
    
    const onFilter=(ev)=>{
        const val=ev.target.value
        if(filCon.includes(val)){
            setFilCon(filCon.filter(v=>v!==val))
        }else{
            setFilCon([...filCon,val])
        }
    }
    useEffect(()=>{
        switch(filCon.length){
            case 1: setProduct( filCon[0]==="price" ? 
                                    data.filter(d=> d.categoryId===catId && d.price<100):
                                    data.filter(d=> d.categoryId===catId && d.inStock))
                    break;
            case 2: setProduct(data.filter(d=> d.categoryId===catId && d.price<100 && d.inStock))
                    break;
            default: setProduct(data.filter(d=> d.categoryId===catId))
        }
    },[filCon,catId])
    return (
        <div>
                
                <Link to="/"><Icon icon="angle-left"/>back to Home</Link>
           <CartBtn/>
            <Filter onFilter={onFilter}/>
            <h1>{category[0].name}</h1>
            <h3>{category[0].description}</h3>
                <FlexGrid >
                {product.length>0 && product.map(prod=> 
                        <ProductGrid
                            product={prod}
                            key={prod.id}
                        />
                    )
                }{
                    product.length===0 && <h2>no result found</h2>
                }
                </FlexGrid>
        </div>
    )
}

export default Category
