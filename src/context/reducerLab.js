
export default (state, action) => {
   if (action.type === 'ADD_FILTER') {
       const key=Object.keys(action.payload)[0]
      //  console.log(key)
      //  console.log(state.hasOwnProperty(key))
       if(state.hasOwnProperty(key))
         return  {...state,[key]:[...state[key],action.payload[key]]}
         else 
         return {...state,[key]:[action.payload[key]]}
   } 
   else if (action.type === 'REMOVE_FILTER') {
    const key=Object.keys(action.payload)[0]
    const remaining=state[key].filter((ele)=>(
         ele!==action.payload[key]
    ))
      return {...state,[key]:remaining}
   }
   else if (action.type === "REMOVE_ALL_FILTER") {
      return action.payload
   }
}

//state[key]=[...state[key],action.payload[key]]