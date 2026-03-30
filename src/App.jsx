
import { Suspense } from 'react'
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
  return (
    <>
      <Navber></Navber>
      <Hearder></Hearder>
      <Suspense fallback="sohan"><Main toolData ={toolData}/></Suspense>
    </>
  )
}

export default App
