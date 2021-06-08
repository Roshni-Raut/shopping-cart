import styled from 'styled-components'

export const FlexGrid=styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`
export const ProductCard=styled.div`
    width:300px;
    height:100%;
    margin:0 15px 40px ;
    background-color:white;
    border-radius:20px;
    border: 1px solid #ddd;
    .img-wrapper{
        width: 100%;
        border-top-left-radius:20px;
        border-top-right-radius:20px;
        overflow:hidden;
        img{
            object-fit:cover;
            height:100%;
            width:100%;
        }
    }
    h1{
        margin:10px;
        font-size:21px;
    }
    Button{
        width:90%;
        height:35px;
        font-size:15px;
        background-color:black;
        color:white;
        margin: 15px;
    }
`