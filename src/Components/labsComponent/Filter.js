import React,{useContext,useEffect,} from 'react'
import { GlobalContextLab } from '../../context/GlobalContextLab'
const Filter = () => {

const {setFilter,removeAllFilter,removeFilter} = useContext(GlobalContextLab)
    useEffect(() => {
        //console.log(state)
        document.querySelectorAll('.filter_button').forEach((button) => {
            button.addEventListener('click',(e)=>{
                
                  if(e.target.classList.contains('selected'))
                  {  
                    e.target.classList.remove('selected')
                      removeFilter(JSON.parse(e.target.dataset.filter))
                  }
                else{
                    e.target.classList.add('selected')
                    setFilter(JSON.parse(e.target.dataset.filter))
                }
               // console.log(e.target.classList)
            })
        })
        return () => {
            
        }
    },[])
    return (
        <div className="flex items-center justify-center flex-wrap">
            <button className="filter_button px-4 py-1 bg-indigo-600 text-white m-3 rounded-xl" onClick={()=>removeAllFilter()}>All</button>
            <button className="filter_button px-4 py-1 bg-indigo-600 text-white m-3 rounded-xl" data-filter={JSON.stringify({min_age_limit:45})}>45+</button>
            <button className="filter_button px-4 py-1 bg-indigo-600 text-white m-3 rounded-xl" data-filter={JSON.stringify({min_age_limit:18})}>18+</button>
            <button className="filter_button px-4 py-1 bg-indigo-600 text-white m-3 rounded-xl" data-filter={JSON.stringify({vaccine:"COVAXIN"})}>Covaxin</button>
            <button className="filter_button px-4 py-1 bg-indigo-600 text-white m-3 rounded-xl" data-filter={JSON.stringify({vaccine:"COVISHIELD"})}>Covishield</button>
        </div>
    )
}

export default Filter
