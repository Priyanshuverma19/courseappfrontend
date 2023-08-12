import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Request = () => {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("");
    const [course,setCourse]= useState("");
  return (
    
    <Container h="92vh">
   <VStack h="full" justifyContent={"center"} spacing={"16"}>
    <Heading children="Request New Course"/>
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
       <FormLabel htmlFor='course' children="Course"></FormLabel>
        <Textarea
      
        required
        id='course'
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="explain course..."
       
        focusBorderColor='purple.500'
/>
       
       </Box>
       
      
       <Button my="4" colorScheme={"purple"} type='submit'>Send Mail</Button>
       <Box my="4">
        See avalable  Course!{' '}
        <Link to="/courses">
          <Button variant="link" colorScheme={"purple"}>click</Button>{" "}here
        </Link>

      </Box>
      
    </form>

    
   </VStack>
    </Container>
  )
}

export default Request