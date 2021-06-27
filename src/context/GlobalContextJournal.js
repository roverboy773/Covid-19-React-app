import React,{ createContext,useReducer } from "react";
import reducerJournal from "./reducerJournal"

const initialState={}
export const GlobalContextJournal=createContext(initialState)

export const GlobalProvider=({children})=>{

    const [state, dispatch] = useReducer(reducerJournal, initialState)

      const setBlog=(val)=>{
        dispatch({
            type:'SHOW_BLOG',
            payload:val
        })
      }

    return(
        <GlobalContextJournal.Provider values={{state,setBlog}}>
             {children}
        </GlobalContextJournal.Provider>
    )
}