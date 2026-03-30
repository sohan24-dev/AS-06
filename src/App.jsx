
import { Suspense, useState } from 'react'
import './App.css'
import Hearder from './component/Hearder/Hearder'
import Main from './component/Main/Main'
import Navber from './component/Navber/Navber'



const fetchData = async() =>{
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  const toolData = fetchData()
  const [selectedCat,setSelectedCart] = useState([])
  return (
    <>
      <Navber selectedCat={selectedCat}></Navber>
      <Hearder></Hearder>
      <Suspense fallback="sohan"><Main toolData ={toolData} selectedCat={selectedCat} setSelectedCart={setSelectedCart}/></Suspense>
    </>
  )
}

export default App
