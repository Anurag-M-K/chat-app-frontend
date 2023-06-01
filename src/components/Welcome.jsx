import React from 'react';
import styled from 'styled-components';
import Robot from '../assets/robot.gif'
export default function Welcome({currentUser}){

    console.log("current user from welcome ",currentUser)
    return <div className=' flex justify-center items-center flex-col'>
<img className='w-[20rem] h-[20rem]' src={Robot} alt="" />
<h1 className='text-white text-2xl font-bold' >Welcome , <span className='text-2xl font-bold text-blue-600 uppercase'>{currentUser[0]?.username}</span></h1> 
<h3 className='text-white text-md font-medium'>Please select a chat to start Messaging</h3>

 </div>
}


const container = styled.div``