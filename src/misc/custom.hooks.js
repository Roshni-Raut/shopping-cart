import{useReducer,useEffect} from 'react'



function reducer(prevState,action){
    switch(action.type){
        case 'ADD':{
            return[...prevState,[action.pId , action.qty]]
        }
        case 'REMOVE': {
            return prevState.filter((pId)=>pId[0]!==action.pId)
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