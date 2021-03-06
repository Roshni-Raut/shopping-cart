import FadeIn from 'react-fade-in'
import styled from 'styled-components'

export const ProductCard=styled(FadeIn)`
    width:300px;
    height:100%;
    margin:0px 15px 30px;
    background-color:silver;
    border-radius:30px;
    .img-wrapper{
        width: 100%;
        img{
            border-radius:30px;
            height:200px;
            width:100%;
        }
    }
    .text-wrapper{
        padding:25px;
        h1,h2,h3{
            margin:2px 2px 2px 2px;    
        }
        h1{
            font-weight: normal;
            font-size:21px;
        }
        h2{
            font-size:22px;
        }
        h3{
            font-size:18px;
        }
        Button{
            width:100%;
            height:35px;
            font-size:15px;
            border:none;
            border-radius:8px;
            margin-top:15px;
            background-color:grey;
            color:white;
            &:focus{
                background-color:black;
            }
        } 
    }
    &:hover{
        box-shadow: 3px 3px 5px grey;
    }
`