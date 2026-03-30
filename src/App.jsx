
import { Suspense, useState } from 'react'
import './App.css'
import Hearder from './component/Hearder/Hearder'
import Main from './component/Main/Main'
import Navber from './component/Navber/Navber'
import PricingCard from './component/PricingCard/PricingCard'
import Count from './component/Count/Count'



const fetchData = async() =>{
  const res = await fetch('/data.json')
  return res.json()
}

const fetchPricing = async() =>{
  const res = await fetch('/pricing.json')
  return res.json()
}

function App() {
  const toolData = fetchData()
  const pricingData = fetchPricing()
  const [selectedCat,setSelectedCart] = useState([])
  return (
    <>
      <Navber selectedCat={selectedCat}></Navber>
      <Hearder></Hearder>
      <Count></Count>
      <Suspense fallback="sohan"><Main toolData ={toolData} selectedCat={selectedCat} setSelectedCart={setSelectedCart}/></Suspense>
      <Suspense fallback="card"><PricingCard pricingData={pricingData}></PricingCard></Suspense>
    </>
  )
}

export default App
