
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import { getcountry } from "../Redux/country/action"
import CountryInput from "./countryinput"

export const Country =() => {
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(getcountry())
    }, [])
     
    const loading = useSelector((state) => state.countrys.isLoading)
    // console.log(companyslist)

    if (loading) {
         return <div>........loading</div>
     }
    
  return (
    <div className="App">
          <CountryInput></CountryInput>
    </div>
  )
}

