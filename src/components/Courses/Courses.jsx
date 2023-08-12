import React, { useState } from 'react'
import{Link} from "react-router-dom";
import {Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack} from "@chakra-ui/react"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllcourses } from '../../redux/actions/course';
import { toast } from 'react-hot-toast';

const Course=({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
  return(
<VStack className='course' alignItems={["center","flex-start"]}>
<Image src={"https://source.unsplash.com/user/c_v_r/1900x800"} boxSize="60" objectFit={"contain"}/>
<Heading textAlign={["center","left"]} maxW="200px" fontFamily={"sans-serif"} size={"sm"} noOfLines={3} children={title} />
<Text noOfLines={2} children={description}/>
<HStack>
<Text fontFamily={"bold"} textTransform="uppercase" children={"Creator"}/>
<Text fontFamily={"bold"} textTransform="uppercase" children={creator}/>
</HStack>
<Heading textAlign={"center"} size="xs"
children={`Lectures -${lectureCount}`}
textTransform="uppercase"
/>
<Heading size="xs"
children={`Views -${views}`}
textTransform="uppercase"
/>
<Stack direction={["column","row"]} alignItems="center">
<Link to={`/course/${id}`}>
  <Button colorScheme={"purple"}>Watch NOw</Button>
</Link>
<Button onClick={()=>addToPlaylistHandler(id)} variant={"ghost"} colorScheme={"purple"}> Add to playlist</Button>
</Stack>
</VStack>
  )
}

const Courses = () => {
  const [keyword,setkeyword]= useState("")
  const [category,setcategory]= useState("");
  const dispatch= useDispatch();
  const addToPlaylistHandler=(courseId)=>{
    console.log("clicked",courseId)
  }
  const categories=[
    "Web development",
    "Mobile development",
    "Data Science",
    "Blockchain",
  ];

  const {courses,error}= useSelector(state=>state.courses)

useEffect(()=>{
dispatch(getAllcourses(category,keyword));
if(error){
  toast.error(error);
  dispatch({type:'clearError'})
}
},[dispatch,category,keyword])
  return (<Container minH={"95vh"} 
  maxw="container.lg" paddingY={"8"}
>
<Heading
children="All Cources" m={"8"}
/>
<Input value={keyword} onChange={(e)=>setkeyword(e.target.value)}
placeholder='Search a course...' type='text'
focusBorderColor='purple.500'/>
<HStack overflowX={"auto"} paddingY={"8"} css={{'&::-webkit-scrollbar':{
  display:'none'
},
}} >
  {
    categories.map((items,index)=>(
      <Button onClick={()=>(setcategory(items))} minW={"60"}>
    <Text children={items}/>
  </Button>
    ))
  }
</HStack>
<Stack
direction={["column", "row"]}
flexWrap="wrap"
justifyContent={["flex-start", "space-evenly"]}
align={["center", "flex-start"]}
>
{
 courses.length>0? courses.map((item)=>(
  <Course
  key={item._id}
title={item.title}
description={item.description}
views={item.views}
imageSrc={item.poster.url}
id={item._id}
creator={item.createdBY}
lectureCount={item.numOfVideos}
addToPlaylistHandler={addToPlaylistHandler}

/>
 )):<Heading children='Course not found'/>
}
</Stack>
  </Container>)
}

export default Courses