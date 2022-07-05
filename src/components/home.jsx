import { useState } from 'react'
// import './App.css'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Home =() => {

  return (
      <div>
          <h1 style={{
                      width: "20%",
                      margin :"40px auto",
                      fontSize : "20px"
          }}>Home Page</h1>
          <br /><br />
          <div>
              <Link to="/add-country">
                  <div>
                    <Box as='button' borderRadius='md' bg='tomato' color='white' px={6} h={8}>
                        Add Country
                    </Box>
                  </div>
              </Link>
              <br /><br />
              <Link to="/add-city">
                  <div>
                    <Box as='button' borderRadius='md' bg='tomato' color='white' px={6} h={8}>
                          Add City
                    </Box>
                  </div>
              </Link>
          </div>
    </div>
    
  )
}

