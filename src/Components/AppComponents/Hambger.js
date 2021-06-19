import React,{useState} from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { isDOMComponent } from 'react-dom/cjs/react-dom-test-utils.production.min'

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
