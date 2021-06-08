import React, {createContext,useContext,useEffect, useState} from 'react'
import { showCart } from './custom.hooks'
import { Product } from './helper'

const Total=createContext()

export const TotalProvider=({children})=>{
    const [cart]=showCart()
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        setQty(
            cart.reduce((t,val)=>{
                return t+val.qty
            },0)
        )
        setTotal(
            cart.reduce((t,val)=>{
                const product=Product(val.id)
                return t+(product.price*val.qty)
            },0)
        )
    },[cart])
    return <Total.Provider value={[qty,total]}>
        {children}
        </Total.Provider>
}

export const useTotal=()=>useContext(Total)