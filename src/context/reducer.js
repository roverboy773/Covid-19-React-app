export default(state,action)=>{
   // console.log(state)
    if(action.type==="STATE_CHANGE"){
        // state.region=action.payload
        // console.log(state)
        // return state
        return {...state,region:action.payload}
    }else if(action.type==="CASE_COUNT"){
         return {...state,cases:action.payload}
    }else
    return state
   
}