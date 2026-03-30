
import { Suspense, useState } from 'react'
import './App.css'
import Hearder from './component/Hearder/Hearder'
import Main from './component/Main/Main'
import Navber from './component/Navber/Navber'
import PricingCard from './component/PricingCard/PricingCard'
import Count from './component/Count/Count'
import Started from './component/Started/Started'
import Footer from './component/Footer/Footer'



const fetchData = async() =>{
  const res = await fetch('/data.json')
  return res.json()
}

const fetchPricing = async() =>{
  const res = await fetch('/pricing.json')
  return res.json()
}
const fetchStarted = async() =>{
  const res = await fetch('/started.json')
  return res.json()
}

const startedData = fetchStarted()

function App() {
  const toolData = fetchData()
  const pricingData = fetchPricing()
  const [selectedCat,setSelectedCart] = useState([])
  return (
    <>
      <Navber selectedCat={selectedCat}></Navber>
      <Hearder></Hearder>
      <Count></Count>
      <Suspense fallback="sohan"><Main toolData ={toolData} selectedCat={selectedCat} setSelectedCart={setSelectedCart} startedData={startedData}/></Suspense>
      
      <Suspense fallback="card"><PricingCard pricingData={pricingData}></PricingCard></Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
