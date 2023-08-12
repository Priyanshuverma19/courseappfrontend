import { Box, Grid, Heading,Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4"
const CoursePage = () => {
    
    const [lecturNumber,setLectureNumber]= useState(0);
    const lectures=[
        {
            _id:"bcbfkfrkrbvjv",
            title:"sample",
            description:"sample description",
           video:{
            url:'badcelfid',
           }
           
        },
        {
            _id:"bcbfkfrkrbvjv2",
            title:"sample2",
            description:"sample description",
           video:{
            url:'badcelfid',
           }
           
        },
        {
            _id:"bcbfkfrkrbvjv3",
            title:"sample3",
            description:"sample description",
           video:{
            url:'badcelfid',
           }
           
        },
        
    ]
  return (
    <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
<Box>
<video 
    width={"100%"}
    controls 
    disableRemotePlayback
    disablePictureInPicture
    controlsList='nodownload noremoteplayback'
    src={introVideo}
    
    >

    </video>
    <Heading m= "4" children={`#${lecturNumber+1} ${lectures[lecturNumber].title}`}></Heading>
    <Heading m="4" children="Description" />
    <Text m="4" children={lectures[lecturNumber].description}></Text>
</Box>
<VStack>
    {
        lectures.map((item,index)=>(
            <button
            onClick={()=>setLectureNumber(index)}
            key={item._id}
            style={{width:"100%",
           padding:"1rem",
           textAlign:"center",
           margin:0,
           borderBottom:"1px solid rgba(0,0,0,0.2)",
        }}
            >
               <Text noOfLines={1}>
                #{index+1} {item.title}
                </Text> 
            </button>
        )
            
        )
    }
</VStack>

    </Grid>

  )
}

export default CoursePage