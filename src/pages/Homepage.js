import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import data from '../data/categories.json'

const Homepage = () => {
    
    return (
        <div>
            <h1>homepage</h1>
            {
                data.map((val)=>
                <Button color="red" block key={val.id}>
                    <Link key={val.id} to={`/Category/${val.id}`}>{val.name}</Link>
                </Button>)
            }
        </div>
    )
}

export default Homepage
