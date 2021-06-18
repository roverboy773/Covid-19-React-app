import React,{useReducer,createContext} from 'react'
import reducer from "./reducer"
//initial state
const initialState={
    region:'Delhi',
    cases:{
        confirmed:{
            total: 0,
            new:0,
        },
        active:{
            total:0,
            new:0,
        },
        deaths:{
            total:0,
            new:0
        },
        recovered:{
            total: 0,
            new:0,
        } 
    }
}

export const GlobalContext=createContext(initialState)

export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)
      
    function setRegion(newState){
        dispatch({
            type:"STATE_CHANGE",
            payload:newState
        })
       // console.log(newState)
    }
        function setCases(data){
            dispatch({
                type:"CASE_COUNT",
                payload:data
                
            })
           // console.log(data)
        }
            
//console.log(state)
    return(
        <GlobalContext.Provider value={{
           state:state,
            setRegion,
            setCases,
            
        }}>
           {children}
        </GlobalContext.Provider>
    )}
