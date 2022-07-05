import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"


function CountryList() {

    const companylist = useSelector((state) => state.countrys.company)

    const loading = useSelector((state) => state.countrys.isLoading)
    
    if (loading) {
         return <div>........loading</div>
     }
  return (
      <div>
          <div style={{
                      width: "20%",
                      margin :"auto auto 20px auto",
                      fontSize : "20px", 
                      fontWeight : "600"    
          }}>
              Country Dropdown
          </div>
          {companylist.map((e,i) => {
              return (
                  <div style={{
                      border: "1px solid black",
                      width: "20%",
                      margin: "auto",
                      padding: "5px",
                      fontSize : "20px"
                  }} key={i}>{e.name }</div>
              )
          })}
    </div>
  )
}

export default CountryList
