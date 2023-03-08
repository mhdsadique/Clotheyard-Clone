
import { AddIcon } from '@chakra-ui/icons'
import {Select, Box, Button, Flex, FormLabel, grid, Heading, Image, Input, InputGroup, Stack, Text, Textarea, useToast, Grid, Progress, ButtonGroup,  } from '@chakra-ui/react'
import {FormControl, SimpleGrid,GridItem,
  InputLeftAddon,  FormHelperText,
  InputRightElement,} from '@chakra-ui/react';


// import {
// Select,
//   Link,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   InputLeftElement,
//   Grid,
//   Badge,
//   Toast,
// } from "@chakra-ui/react";
// import React from 'react';

import {  useDisclosure } from '@chakra-ui/react'
import {  Drawer, DrawerBody, DrawerFooter,
    DrawerHeader,DrawerOverlay, DrawerContent,
    DrawerCloseButton, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// function Addres() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const firstField = React.useRef()
//   const [addaress,setAdaddress]=useState([])
//   const [address,setAddress]=useState('')
//   const [phone,setphone]=useState('')
//   const [email,setemail]=useState('')
//   const [pincode,setpincodes]=useState('')
//   const [house,sethouse]=useState('')
//   const [area,setarea]=useState('')
//   const [step, setStep] = useState(1);
//   const [progress, setProgress] = useState(33.33);
//   var addata=[]
//   const toast = useToast()
// const navigate=useNavigate()
// const handleClick=()=>{
//   navigate(`/payment`)

// }
//   const submitdata=()=>{
//     const newItem={
//       name:address,
//       phone:phone,
//       email:email,
//       pincode:pincode,
//       house:house,
//       area:area,
//       id:Date.now()
//   }
//   addata.push(newItem)
//   setAdaddress([...addaress,newItem])
// }

// console.log(addaress)
//   return (
//     <>

//     <Box w={'30%'} margin='auto' mt="20px">
//   {/* <Flex justifyContent={'space-between'}> */}

//     <Box >
//         <Heading>Choose Address</Heading>
//         <Text>Detailed address will help our delivery partner reach your doorstep quickly</Text>
//     </Box>
//     <Box>
//         <Image m="auto" width={350}height={350} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg'}alt='addrses'/>
//     </Box>
//   {/* </Flex> */}
//   <Flex gap='0px'>
//   <Box onClick={onOpen} cursor={'pointer'} textAlign={'center'} w={'400px'}h='100px' color={'#e80071'}display='grid' border='1px'alignItems={'center'}justifyContent={'center'}>
//     <AddIcon margin='auto'/>
//     <Heading size={'md'}>Add New Address</Heading>
//   </Box>
//   <Box  >
// {
//   addaress.map((ad)=><Box key={ad.id} w={'350px'}h='auto' border='1px' padding={'10px'}>
//     <Heading size={'md'}>{ad.name}</Heading>
//     <Text size={'md'}>{ad.area}</Text>
//     <Text size={'md'}>{ad.house}</Text>
//     <Text size={'md'}>{ad.phone}</Text>
//     <Button onClick={()=>handleClick()}bgColor='#e80071' >Deliver here</Button>
//   </Box>)
// }
//   </Box>
// </Flex>
//   </Box>
//   {/* =================== */}
//       <Drawer
//         isOpen={isOpen}
//         placement='right'
//         initialFocusRef={firstField}
//         onClose={onClose} >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader borderBottomWidth='1px'>
//           New Address
//           </DrawerHeader>
//            <Heading  mt="10px"  mb="10px" ml="20px" size={'sm'}>Contact</Heading>
//           <DrawerBody>
//             <Stack spacing='24px'>
//               <Box >
//                 {/* <FormLabel htmlFor='username'>Name</FormLabel> */}
//                 <Input
//                    onChange={(e)=>setAddress(e.target.value)}
//                    value={address}
//                   type='text'
//                   ref={firstField}
//                   id='username'
//                   placeholder='Name'
//                   mt="10px"
//                 />
//                   <Input
//                       onChange={(e)=>setphone(e.target.value)}
//                    value={phone}
//                   type='number'
//                   ref={firstField}
//                   id='username'
//                   placeholder='Phone'  mt="10px"
//                 />
//                   <Input
//                       onChange={(e)=>setemail(e.target.value)}
//                    value={email}
//                   type='email'
//                   ref={firstField}
//                   id='username'
//                   placeholder='Email ID(Optional)'  mt="10px"
//                 />
//               </Box>
            

//               <Heading size={'sm'}>Address</Heading>

//               <Box>
//                 {/* <FormLabel htmlFor='url'>Pincode</FormLabel> */}
//                 <InputGroup>
//                 <Input
//                     onChange={(e)=>setpincodes(e.target.value)}
//                    value={pincode}
//                   type='number'
//                   ref={firstField}
//                   id='username'
//                   placeholder='Pincode'
//                 />
//                 </InputGroup>
//               </Box>


//               <Box>
//               <Input
//                  onChange={(e)=>sethouse(e.target.value)}
//                  value={house}
//                   type='text'
//                   ref={firstField}
//                   id='username'
//                   placeholder='House/Flate/Office No'
//                 />
//                 <FormLabel htmlFor='desc'></FormLabel>
//                 <Textarea  value={area}   onChange={(e)=>setarea(e.target.value)} id='desc' placeholder='Road Name/Area/Colony' />
//               </Box>
//             </Stack>
//           </DrawerBody>

//           <DrawerFooter borderTopWidth='1px'>
//             <Button variant='outline' mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button onClick={()=>{submitdata(); onClose()}} bgColor='#e80071'>Confirm My Booking</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   )
// }



// -------------------------------




const Address=()=> {

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate(`/`)
  
  }
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Payment  Successful.",
                    description: "Your Order Has Been Confirmed",
                    position: "top",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });handleClick() }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
export default Address
// ---------------------------
  

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" fontSize={"23px"} color="red" py="10px" textAlign={'center'} fontWeight="normal" mb="2%">
        Enter Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
    
      <Heading w="100%"  fontSize={"23px"} color="red" py="10px" textAlign={'center'} fontWeight="normal" mb="2%">
        Adress
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>India</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        
      </FormControl>
    </>
  );
};

const Form3 = () => {
 
return (
<Box >
<Heading w="100%"  fontSize={"23px"} color="red" py="10px" my="20px" textAlign={'center'} fontWeight="normal">
Enter Cart Details
</Heading>
<SimpleGrid columns={1} spacing={6}>
  <FormControl as={GridItem} colSpan={[3, 2]}>


  <InputGroup my="20px" size="sm">
      <InputLeftAddon
        bg="gray.50"
        _dark={{
          bg: 'gray.800',
        }}
        color="gray.500"
        rounded="md">
        Card No
      </InputLeftAddon>
      <Input
        type="number"
        focusBorderColor="brand.400"
        rounded="md"
      />
    </InputGroup> 
    
                {/* cvv and expary */}
     <Grid my="50px" templateColumns={"repeat(2,1fr)"} gap="2px" >
    <InputGroup  size="sm">
      <InputLeftAddon
        bg="gray.50"
        _dark={{
          bg: 'gray.800',
        }}
        color="gray.500"
        rounded="md">
        cvv
      </InputLeftAddon>
      <Input w="50px"
        type="number"
        
        focusBorderColor="brand.400"
        rounded="md"
      />
    </InputGroup>
    <InputGroup   size="sm">
      <InputLeftAddon
        bg="gray.50"
        _dark={{
          bg: 'gray.800',
        }}
        color="gray.500"
        rounded="md">
        Expary
      </InputLeftAddon>
      <Input w="130px"
        type="date"
        
        focusBorderColor="brand.400"
        rounded="md"
      />
    </InputGroup>
    </Grid>
   
  </FormControl>

 
</SimpleGrid>
</Box>
);
};
