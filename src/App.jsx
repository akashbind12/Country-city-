import { useState } from 'react'
import './App.css'
import { Country } from './components/country'
import { Home } from './components/home'
import {Route,Routes} from "react-router-dom"
import { City } from './components/city'
import { Citydetails } from './components/citydetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<Country></Country>} />
        <Route path="/add-city" element={<City></City>} />
        <Route path="/add-city/:id" element={<Citydetails></Citydetails>} />
      </Routes>
    </div>
  )
}

export default App
