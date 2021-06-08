import productData from '../data/products.json'

export const Product=(id)=>{
    const product=productData.filter(p=>p.id===id)
    return product[0]
}