import styled from 'styled-components'

export const FlexGrid=styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const StyledTable= styled.table`
    margin:auto;
    border-collapse:collapse;
    background-color: white;
    border-radius:10px;
    text-align:center;
    th{
        padding:10px;
        color:rgb(153, 0, 0);
        background-color:#ffccb3 ;
    }
    td{
        padding:10px;
        img{
            height: 50px;
            width: 50px;
            overflow: hidden;
            border-radius: 10px;
        }
    }
    tr{
        Button{
            border:none;    
            padding:5px;
            border-radius:5px;
        }
        .in,.de{
            background-color:transparent;
            font-weight:bold;
            margin:2px;
            &:hover{
                background-color:green;
                color:white;
            }
        }

        .r{
            color:white;
            background-color:red;   
        }
    }
`

export const HomePage=styled.div`
    text-align:center;
    h1{
        margin-bottom:40px;
        color: rgb(0, 0, 102);
    }  
    h3{
        text-align:left;
        margin-left:20px;
    } 
    Button{
        direction:flex;
        justify-content:center;
        flex-wrap:wrap;
        background-color: #e6e6ff;
        border:rgb(51, 51, 255) solid 2px;
        border-radius: 10px;
        padding: 30px;
        height: 120px;
        margin:20px;
        .link{
            color:rgb(0, 0, 153);
            font-size:20px;
            text-decoration:none;
        }
        &:hover{
            box-shadow: 2px 2px 4px grey;
        }
    }
`
export const CategoryPage=styled.div`
    margin-top:20px;
    h1,h3{
        text-align: center;
    }
    h1{
        color: rgb(0, 102, 0);
    }
    h3{
        color:rgb(0, 153, 0);
    }
`
export const CartPage=styled.div`
    margin-top:20px;
    h1,h3{
        text-align: center;
    }
    h1{
        color: rgb(255, 102, 0);
    }
`

export const Home=styled.span`
    margin:10px;
    background-color: silver;
    display:inline;
    padding: 8px;
    border-radius:20px;
    .link{
        color:black;
        text-decoration:none;
    }
    &:hover{
        box-shadow: 2px 2px 4px grey;
    }
`