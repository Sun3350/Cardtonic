import React from 'react'
import styled from "styled-components"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";

function Signin() {
  return (
    <Container>
        <Wrap>
            <Boxq>
            <Text>Hop right back in.</Text>
            <Tex>Sign into continue</Tex>
            <ButtonGroup>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><A><P>Download Now</P> Google Play</A></Buttons>
    <Button><GrApple size='2em'   color="#0E2F4E"/><A><P>Download Now</P>  App Store</A> </Button>
</ButtonGroup>
            </Boxq>
            <Box>
               <Sign>
                  <For>
                  <input type="text" placeholder='Drop your Email' name='user_email' />
                      <input type="text" placeholder='Message Subject' name='user_messagetype' />
                  </For>
                  < ButtonGroups><Butto>Get Me In <FaArrowRight size='1em' color="#00CED0"/></Butto> <a href='#'>Forgot your password?</a> 
                  </ButtonGroups>
               </Sign>
               
            </Box>
        </Wrap>
        <No>New User?<a href='/register'>Register Now</a></No>
    </Container>
  )
}

export default Signin


const Container = styled.div`
width:100%;
height:120vh;
display: flex;
flex-direction:column;
justify-content: center;
background-color:#F9F9F9;
align-items: center;
`
const Wrap = styled.div`
width:90%;
height: 60vh;
display:flex;
@media (max-width:1200px){
  flex-direction: column;
  height:65vh;
}
`
const Boxq = styled.div`
width:40%;
height:100%;
@media (max-width:1200px){
  width:100%;
  height:40%;
}
`
const Box = styled.div`
width:60%;
height:100%;
background-color:#FFFFFF;
border-radius:40px;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:1200px){
  width:100%;
  height:100%;
  
}
`
const Sign = styled.div`
width:70%;
height:70%;
@media (max-width:1200px){
  height:85%;
}
`
const Text = styled.p`
font-size:52px;
font-weight:800;
color:#002444;
margin-top:6vh;
@media (max-width:1200px){
  font-size:27px;
}
`
const Tex = styled.p`
font-size:23px;
font-weight:700;
color:#E7E7E7;
`
const ButtonGroup = styled.div`
display:flex;
margin-top:8vh;
@media (max-width:1200px){
   display:none;

 }
`;
const Buttons = styled.button`
background:#000000;
color:#FFFFFF;
width:150px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
font-size:15px;
font-weight: 800;
border: 0;
outline: 0;
box-shadow: 0px 2px 2px lightgray;
cursor:pointer;
`
const Button = styled(Buttons)`
background-color:#EFEFEF;
color:#0E2F4E;
margin-left:10px;
@media (max-width:768px){
  margin:10px 0px 0px 0px;
 }`

const P = styled.p`
font-size:5px;
margin:0;
`
const A = styled.div`
margin:0;
display: block;
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
a{
  font-size:15px;
font-weight:700;
color:#00CED0;
text-decoration:none;@media (max-width:1200px){
  text-align: right;
}
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
  margin-top: 2vh;
  width:21vh;
}`
const No = styled.p`
font-size:15px;
margin-top:10vh;
font-weight:600;
color:#002444;

a{
  font-size:15px;
margin-top:10vh;
font-weight:700;
color:#00CED0;
text-decoration:none;
}
`