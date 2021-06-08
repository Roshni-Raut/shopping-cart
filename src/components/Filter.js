import React from 'react'

const Filter = ({onFilter}) => {
    return (
        <div>
            <p>Filter</p>
            <input type="checkbox" value="stock" onChange={onFilter}/> in Stock<br/>
            <input type="checkbox" value="price" onChange={onFilter}/> Price below 100<br/>
        </div>
    )
}

export default Filter
