import React from 'react'
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa";

function Signin() {
  return (
    <Container>
        <Wrap>
            <Boxq>
            <Text>Hop right back in.</Text>
            <Tex>Sign into continue</Tex>
            </Boxq>
            <Box>
               <Sign>
                  <For>
                      <input type="text" placeholder="What's your Fullname" name='user_fullname' />
                      <input type="text" placeholder='Drop youremail' name='user_email' />
                      <input type="text" placeholder='Create a Username' name='user_name' />
                      <input type="number" placeholder='Phone Number' name='user_phonenumber' />
                      <input type="text" placeholder='Create Password' name='user_Password' />
                      <input type="text" placeholder='Confirm Password' name='user_confirmpassword' />
                  </For>
                  < ButtonGroups><Butto>Create Account<FaArrowRight size='1em' color="#00CED0"/></Butto> <N>Got an Account?<a href='/signin'>Sign In</a> </N>
                  </ButtonGroups>
               </Sign>
               
            </Box>
        </Wrap>
        <No>Need Help?<a href='/contact'>Contact Us</a></No>
    </Container>
  )
}

export default Signin


const Container = styled.div`
width:100%;
height:150vh;
display: flex;
flex-direction:column;
background-color:#F9F9F9;
align-items: center;
justify-content:center;
@media (max-width:1200px) {
   height:160vh;
}
`
const Wrap = styled.div`
width:90%;
height: auto;
display:flex;
@media (max-width:1200px) {
   flex-direction:column;
}
`
const Boxq = styled.div`
width:40%;
height:100%;
@media (max-width:1200px) {
   width:100%;
}
`
const Box = styled.div`
width:60%;
height:auto;
background-color:#FFFFFF;
border-radius:40px;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:1200px) {
   width:100%;
   margin-top: 3vh;
}
`
const Sign = styled.div`
width:70%;
height:auto;

`
const Text = styled.p`
font-size:52px;
font-weight:800;
color:#002444;
margin-top:6vh;
@media (max-width:1200px){
  font-size:27px;}
`
const Tex = styled.p`
font-size:23px;
font-weight:700;
color:#E7E7E7;
`

const For = styled.div`
input{
  width:100%;
  height:10vh;
  border-radius:20px;
  background-color: white;
  color: #00CEDE;
  border:solid 1px ;
  border-color:  #00CEDE;
   padding-left:5vh;
   font-size:16px;
   font-weight:700;
   margin-top:3vh;
   ::placeholder{
     color:#00CEDE;
   }
   @media (max-width:350px){
  padding-left:2vh;}
}`
const ButtonGroups = styled.div`
width:100%;
display:flex;
margin-top:3vh;
justify-content: space-between;
@media (max-width:1200px){
  flex-direction:column-reverse;
}
`

const Butto = styled.button`
background:#000000;
color:#00CED0;
width:25vh;
height:60px;
display:flex;
padding:0vh 2vh 0vh 2vh;
justify-content:space-between;
align-items:center;
border-radius:20px;
font-size:15px;
font-weight: 600;
border: 0;
outline: 0;
cursor:pointer;
@media (max-width:1200px){
 margin-top:3vh;
 width:21vh;
 }`
const No = styled.p`
font-size:15px;
margin-top:10vh;
font-weight:600;
color:#002444;
@media (max-width:1200px){
  margin-top: 7vh;}
a{
  font-size:15px;
margin-top:10vh;
font-weight:700;
color:#00CED0;
text-decoration:none;
}
`
const N = styled(No)`
margin:0;
@media (max-width:1200px){
  text-align:right;}
a{
    margin:0;
    @media (max-width:1200px){
  text-align:right;}
}
`