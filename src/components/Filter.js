import React from 'react'
import { FilterStyle } from './Filter.styled'

const Filter = ({onFilter}) => {
    return (
        <FilterStyle>
            {console.log('filter render')}
            <h3> Filters: </h3>
            <div>
                <input type="checkbox" value="stock" onChange={onFilter}/>in Stock
                <input type="checkbox" value="price" onChange={onFilter}/>Price below 100
            </div>
        </FilterStyle>
    )
}

export default Filter
