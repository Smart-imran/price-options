
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <h1 className='text-4xl bg-rose-500 text-center font-bold p-2'>Vite + React</h1>
      
      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      
      
     

    </>
  )
}

export default App
