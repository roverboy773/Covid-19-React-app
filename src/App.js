import Navbar from './Components/AppComponents/Navbar'
import Cases from './Components/AppComponents/Cases'
import Select from "./Components/AppComponents/Select"
import Chart from './Components/AppComponents/Chart'
import StateName from "./Components/AppComponents/StateName"
import Monuments from "./Components/AppComponents/Monuments"
import Heading from "./Components/AppComponents/Heading"
import Heading2 from "./Components/AppComponents/Heading2"
import IndiaCases from "./Components/AppComponents/IndiaCases"
import './css/App.css';
import { GlobalProvider } from "./context/GlobalContext"

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div className="content_wrapper w-auto md:w-11/12 my-8 mx-auto lg:flex flex-row bg-gray-100">
        <Navbar />
        <div className="content w-full -mt-8 md:mt-0">
          <Heading2 />
          <Chart />
          <IndiaCases />
          <StateName />
          <Monuments />
          <Cases />
          <Select/> 
        </div>
      </div>

    </GlobalProvider>
  )
}

export default App;
