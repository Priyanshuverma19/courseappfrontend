import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBinFill } from 'react-icons/ri'

const Users = () => {
  const users=[{
    _id:"jnvsvvgdcvrokv",
    name:"jjcjcejcf",
    email:"jnvsvvgdcvrokv@gmail.com",
    role:"admin",
    subscription:{
      status:"active",
    },

  }];
  const updateHandler=userId=>{
    console.log(userId);
  };
  const deleteButtonHandler =userId=>{
    console.log(userId);
  };
  return (
    <Grid
    css={{
        cursor:`url(),default`
    }}
    minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
   <Box p={["0","16"]} overflowX={"auto"}>

   <Heading textTransform={"uppercase"}
    children="All Users"
    my={"16"}
    textAlign={["center","left"]}
    />
<TableContainer w={["100vw", "full"]}>
  <Table variant={"simple"}size="lg" >
    <TableCaption>All available users in the database </TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Role</Th>
        <Th>Subscription</Th>
        <Th isNumaric>Actions</Th>

      </Tr>
    </Thead>
    <Tbody>
{
  users.map(item=>(
    <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
  ))

}
    </Tbody>

  </Table>

</TableContainer>

   </Box>
  <Sidebar/>
    </Grid> 
  )
}

export default Users

function  Row({item,updateHandler,deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status==='activ'?'Active':'Not Active'}</Td>
      <Td isNumaric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color={"purple.500"}>Change Role</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={"purple.700"}>
            <RiDeleteBinFill/>
          </Button>

        </HStack>
      </Td>

      
      </Tr>
  )
}