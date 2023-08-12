import { Button, Container, Heading, VStack,Input } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { changePassword } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/user';

const ChangePassword = () => {
    const [oldPassword,setOldPassword]= useState("");
    const [newPassword,setNewPassword]= useState("");

    const dispatch = useDispatch();
    const submitHandler = async(e)=>{

      e.preventDefault();
      
      await dispatch(changePassword(oldPassword,newPassword))
      dispatch(loadUser());

    };

    const {loading,message,error} =useSelector(state=>state.profile)
    useEffect(()=>{
if(error){
  toast.error(error)
  dispatch({type:'clearError'});
}
if(message){
  toast.success(message);
  dispatch({type:'clearMessage'})
}
    },[dispatch,error,message]);


  return (
    <Container py="16" minH={"90vh"}>
<form onSubmit={submitHandler}>
    <Heading textTransform={"uppercase"} children="Change Password"
    my="16"
    textAlign={['center','left']}
    />
    <VStack spacing={"8"}>
    <Input
        required
        id='password'
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder=" Old Password"
        type={"password"}
        focusBorderColor='purple.500'

        />
        <Input
        required
        id='password'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder=" New Password"
        type={"password"}
        focusBorderColor='purple.500'

        />
<Button isLoading={loading} w={"full"} colorScheme='purple' type="submit">Change</Button>
    </VStack>
</form>
    </Container>
  )
}

export default ChangePassword