import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'rsuite'
import data from '../data/categories.json'
import { HomePage } from './styled'

const Homepage = () => {
    
    return (
        <HomePage>
            {console.log('homepage render')}
            <h1>Homepage</h1>
            <h3>Categories:</h3>
            {
                data.map((val)=>
                <Button color="red" block key={val.id}>
                    <Link key={val.id} to={`/Category/${val.id}`} className="link">{val.name}</Link>
                </Button>)
            }
        </HomePage>
    )
}

export default Homepage
