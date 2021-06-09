import styled from 'styled-components'

export const CartB= styled.div`
    margin:20px;
    background-color: silver;
    display:inline;
    padding: 8px;
    border-radius:20px;
    position:absolute;
    top:0;
    right:0;
    .link{
        text-decoration:none;
        color:black;
    }
    .circle{
        color:black;
        background-color:white;
        border-radius:50%;
        padding:2px 7px 2px 7px ;
    }
    &:hover{
        box-shadow: 2px 2px 4px grey;
    }
`