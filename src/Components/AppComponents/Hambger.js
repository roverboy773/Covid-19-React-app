import React,{useState} from 'react'
import { Spin as Hamburger } from 'hamburger-react'

const Hambger = ({navToggle}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
        {/* {console.log('hamburger',isOpen)} */}
            <Hamburger color="#1A1053" toggled={isOpen} toggle={setOpen} onToggle={()=>navToggle(!isOpen)}/>
        </div>
    )
}

export default Hambger
