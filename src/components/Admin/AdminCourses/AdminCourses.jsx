import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBinFill } from 'react-icons/ri'
import CourseModal from './CourseModal'

const AdminCourses = () => {
  const courses=[{
    _id:"jnvsvvgdcvrokv",
    title:"jjcjcejcf",
    category:"jnvsvvgdcvrokv@gmail.com",
    role:"admin",
    poster:{
      url:"https://source.unsplash.com/user/c_v_r/1900x800",
    },
    createBy:"priyanshu",
    views:123,
    numOfVideos:11,

  }];
  const {isOpen,onClose,onOpen} = useDisclosure();
  const courseDetailHandler=userId=>{
    onOpen();
  };
  const deleteButtonHandler =userId=>{
    console.log(userId);
  };
  const deleteLectureButtonHandler=(courseId,lectureId)=>{
    console.log(courseId);
    console.log(lectureId);
    

  }
  const addLectureHandler=(e,courseId,title,description,video)=>{
e.preventDefault();
  }
 
  return (
    <Grid
    css={{
        cursor:`url(),default`
    }}
    minH={"100vh"} templateColumns={['1fr','5fr 1fr']}>
   <Box p={["0","8"]} overflowX={"auto"}>

   <Heading textTransform={"uppercase"}
    children="All Users"
    my={"16"}
    textAlign={["center","left"]}
    />
<TableContainer w={["100vw", "full"]}>
  <Table variant={"simple"}size="lg" >
    <TableCaption>All available courses </TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Poster</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th>Creator</Th>
        
        <Th isNumaric>Views</Th>
        <Th isNumaric>Lectures</Th>
        <Th isNumaric>Actions</Th>

      </Tr>
    </Thead>
    <Tbody>
{
  courses.map(item=>(
    <Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
  ))

}
    </Tbody>

  </Table>

</TableContainer>
<CourseModal 
isOpen={isOpen}
 onClose={onClose}
 id={"jcdcnjdvnv"}
 courseTitle="react"
 deleteButtonHandler={deleteLectureButtonHandler}
  addLectureHandler={addLectureHandler}
  />
   </Box>
  <Sidebar/>
    </Grid> 
  )
}



function  Row({item,courseDetailHandler,deleteButtonHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td textTransform={"uppercase"}>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createBy}</Td>
      <Td isNumaric>{item.views}</Td>
      <Td isNumaric>{item.numOfVideos}</Td>
      
      <Td isNumaric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>courseDetailHandler(item._id)} variant={"outline"} color={"purple.500"}>View Lecture</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={"purple.700"}>
            <RiDeleteBinFill/>
          </Button>

        </HStack>
      </Td>

      
      </Tr>
  )
}
export default AdminCourses