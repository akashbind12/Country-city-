import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import React from "react"
import { useDisclosure } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import { addcity, Deletecity, Editcity, getcity } from '../Redux/city/action'

export const City =() => {
   
    const dispatch = useDispatch()
    
  const [update, setUpdate] = useState(false)
  const [id, setId] = useState(null)
  
    useEffect(() => {
       dispatch(getcity())
    }, [])

  const citylist = useSelector((state) => state.citys.city)
  console.log(citylist)

  const loading = useSelector((state) => state.citys.isLoading)
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  const [details, setDetails] = useState({
        "Country": "",
        "City": "",
        "Population": "",
    })

    const handlechange = (e) => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        }) 
    }
    
    const hadlesubmit = () => {
        dispatch(addcity(details))
  }
  
  const handleEdit = (id) => {
    setId(id)
    setUpdate(true)
    //  dispatch(Editcity(details))
   }

  if (loading) {
       return <div>........loading</div>
   }

  return (
    <div className="">
          <h1>Cities</h1>
          <br /><br />
        <TableContainer>
        <Table variant='simple'>
                  <TableCaption>City Details </TableCaption>
            <Thead>
            <Tr>
                <Th>ID</Th>
                <Th>Country Name</Th>
                <Th isNumeric>City Name</Th>
                <Th isNumeric>Population</Th>
                <Th isNumeric>DELETE</Th>
                <Th isNumeric>EDIT</Th>
            </Tr>
            </Thead>
            <Tbody>
                {citylist?.map((e,i) => {
                    return (
                <Tr key={i}>
                    <Td>{e.id}</Td>
                    <Td>{e.Country}</Td>
                    <Td isNumeric>{e.City}</Td>
                    <Td isNumeric>{e.Population}</Td>
                    <Td isNumeric onClick={() => dispatch(Deletecity( e.id ))} >delete</Td>
                    <Td isNumeric onClick={() => {
                          handleEdit(e.id)
                          onOpen()
                    }} >edit</Td>
                </Tr>
                    )
                })}
            {/* <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
            </Tr> */}
           
            </Tbody>
        </Table>
        </TableContainer>
      
          
      <Button onClick={() => {
        setUpdate(false)
        onOpen()
      }}
      >ADD City</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD DETAILS</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} type='text' placeholder='City' name="City"  onChange={handlechange} />
            </FormControl>

            <FormControl mt={4}>
              <Input type='text' placeholder='Country' name="Country"  onChange={handlechange} />
            </FormControl> 

            <FormControl mt={4}>
              <Input type='number' placeholder='Population' name="Population"  onChange={handlechange} />
            </FormControl>          
            
          </ModalBody>

          <ModalFooter>
            {update ? <Button colorScheme='blue' mr={3} onClick={() => dispatch(Editcity(id,details))}>
              Update
            </Button> 
              :
              <Button colorScheme='blue' mr={3} onClick={hadlesubmit}>
              Save
            </Button>}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 
    </div>
  )
}

