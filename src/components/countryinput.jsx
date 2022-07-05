import { useState,useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addcountry } from '../Redux/country/action'
import CountryList from './countryList'


function CountryInput() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

  return (
    <div className="App">
          <CountryList></CountryList>
          <input style={{
            border : "1px solid black",
            margin: "10px",
            padding: "5px",
          }} type="text" placeholder='ADD A NEW COUNTRY' onChange={(e) => (setText(e.target.value))} />
      <button style={{
            background : "teal",
            color: "white",
            padding: "5px 25px 5px 25px",
            borderRadius : "10px",
            border : "none"
      }}
        onClick={() => dispatch(addcountry(text))} >Add</button>
    </div>
  )
}

export default CountryInput
