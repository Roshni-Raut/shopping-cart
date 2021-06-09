/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
import{useReducer,useEffect} from 'react'

function reducer(prevState,action){
    switch(action.type){
        case 'ADD':{
            return[...prevState,{id:action.pId , qty:action.qty}]
        }
        case 'REMOVE': {
            return prevState.filter((prod)=>prod.id!==action.pId)
        }
        case 'INCR':{
            return prevState.map((prod)=>{
                if(prod.id===action.pId){
                    prod.qty=1+prod.qty
                }
                return prod
            })
        }
        case 'DECR':{
            return prevState.map((prod)=>{
                if(prod.id===action.pId){
                    if(prod.qty>1)
                        prod.qty=prod.qty-1
                }
                return prod
            })
        }
        default: return prevState
    }
}

function usePersistedReducer(initialState,key){
  
    const [state,dispatch]=useReducer(reducer,initialState,(initial)=>{
        const persisted =localStorage.getItem(key);
        return persisted?JSON.parse(persisted):initial;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state))
    },[state,key])
    return [state,dispatch]
}

export function showCart(key='products'){
    /* eslint-disable react-hooks/rules-of-hooks */
    return usePersistedReducer([],key)
}


export function useSession(value="",key="category"){
    const catId=sessionStorage.getItem(key)
    if(value!=="")
        sessionStorage.setItem(key,value)
    return catId
}
