import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import data from '../data/categories.json'
import './Homepage.style.css'

const Homepage = () => {
    
    return (
        <div>
            <span >
                <Link to="/cart">cart</Link>
            </span>
            <p>homepage</p>
            {
                data.map((val)=>
                <Button key={val.id}>
                    <Link key={val.id} to={`/Category/${val.id}`}>{val.name}</Link>
                </Button>)
            }
        </div>
    )
}

export default Homepage
