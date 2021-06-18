import { createContext, useReducer } from 'react'
import reducerLab from "./reducerLab"

const initialState = {
    vaccine:[],
    min_age_limit:[]
}

export const GlobalContextLab = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerLab, initialState)

    const setFilter = (val) => {
      // console.log(val)
        dispatch({
            type: 'ADD_FILTER',
            payload: val
        })
      //  console.log(state)
    }
    const removeFilter = (val) => {
        dispatch({
            type: 'REMOVE_FILTER',
            payload: val
        })
    }
    const removeAllFilter = () => {
        dispatch({
            type: 'REMOVE_ALL_FILTER',
            payload: initialState
        })
    }


 //console.log(state);
return (
    <GlobalContextLab.Provider value={{
        setFilter,
        removeFilter,
        removeAllFilter,
        state
    }}>
        {children}
    </GlobalContextLab.Provider>
)

}

