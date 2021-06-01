import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            homepage
            <button value="category" type="submit">
            <Link to="/category">category</Link>
            </button>
            <button value="cart" type="submit">
            <Link to="/cart">cart</Link>
            </button>
        </div>
    )
}

export default Homepage
