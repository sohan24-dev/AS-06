
import './App.css'
import Navber from './component/Navber/Navber'
const fetchData = async() =>{
  const res = await fetch('/data.json')
  return res.json()
}

function App() {
  return (
    <>
      <Navber></Navber>
    </>
  )
}

export default App
