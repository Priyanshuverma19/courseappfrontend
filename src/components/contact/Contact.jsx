import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("");
    const [message,setMessage]= useState("");
  return (
    
    <Container h="92vh">
   <VStack h="full" justifyContent={"center"} spacing={"16"}>
    <Heading children="Contact Us"/>
    <form style={{width:"100%"}}>
       <Box my={"4"}>
       <FormLabel htmlFor='name' children="Name"></FormLabel>
        <Input
        required
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        type={"text"}
        focusBorderColor='purple.500'

        />
       </Box>
       <Box my={"4"}>
       <FormLabel htmlFor='email' children="Email Address"></FormLabel>
        <Input
        required
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        type={"email"}
        focusBorderColor='purple.500'

        />
       </Box>
       <Box my={"4"}>
       <FormLabel htmlFor='message' children="Message"></FormLabel>
        <Textarea
      
        required
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message..."
       
        focusBorderColor='purple.500'
/>
       
       </Box>
       
      
       <Button my="4" colorScheme={"purple"} type='submit'>Send Mail</Button>
       <Box my="4">
        Request for a course?{' '}
        <Link to="/request">
          <Button variant="link" colorScheme={"purple"}>click</Button>{" "}here
        </Link>

      </Box>
      
    </form>

    
   </VStack>
    </Container>
  )
}

export default Contact