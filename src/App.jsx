
import { Suspense, useState } from 'react'
import './App.css'
import Hearder from './component/Hearder/Hearder'
import Main from './component/Main/Main'
import Navber from './component/Navber/Navber'
import Count from './component/Count/Count'
import { Rings } from 'react-loader-spinner'
import Pro from './component/Main/Pro'




const fetchData = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

const fetchPricing = async () => {
  const res = await fetch('/pricing.json')
  return res.json()
}
const fetchStarted = async () => {
  const res = await fetch('/started.json')
  return res.json()
}

const startedData = fetchStarted()
const pricingData = fetchPricing()

function App() {
  const toolData = fetchData()
  const [selectedCat, setSelectedCart] = useState([])
  return (
    <>
      <Navber selectedCat={selectedCat}></Navber>
      <Hearder></Hearder>
      <Count></Count>
      <Pro></Pro>
      <Suspense fallback={<div className="flex justify-center items-center mt-3">
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#000957"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>}><Main toolData={toolData} selectedCat={selectedCat} setSelectedCart={setSelectedCart} startedData={startedData} pricingData={pricingData} /></Suspense>

    </>
  )
}

export default App
