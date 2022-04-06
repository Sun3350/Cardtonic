import React from 'react'
import styled from "styled-components"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import { RiGlobalFill } from "react-icons/ri";
function Page() {
  return (
    <Container>
       <Boxes>
        <Box1>
          <H>Get Started Now</H>
          <H2>Download the Cardtonic App or
             register on web and start trading like bosses do.</H2>
        </Box1>
        <Box2>
        <ButtonGroup>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><A><P>Download Now</P> Google Play</A></Buttons>
   <Button><GrApple size='2em'   color="#0E2F4E"/><A><P>Download Now</P>  App Store</A> </Button>
   <Butto><RiGlobalFill size='2em'   color="#0E2F4E"/><A><P>Signin to Cardtonic</P>On the Web</A> </Butto>
</ButtonGroup>
        </Box2>
          </Boxes>
   </Container>
  )
}

export default Page;

const Container = styled.div`
width:100%;
height:60vh;
display:none;
background-color:#00CEDE;
@media (max-width:768px) {
  display:flex;
  justify-content:center;
align-items: center;
}
`
const Boxes = styled.div`
width:85%;
height:50vh;
display:flex;
flex-direction: column;
@media (max-width:250px){
  height: auto;
}
`

const Box1 = styled.div`
width:100%;
height:40%;
`

const Box2 = styled.div`
width:100%; 
height:100%;
display:flex;
justify-content:center;
align-items: center;
`
const ButtonGroup = styled.div`
display:flex;
margin-top:20px;
flex-direction: column;
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
margin-top:3vh;
`
const Butto = styled(Buttons)`
background-color:#C0FAFF;
color:#16354C;
margin-top:3vh;
`
const P = styled.p`
font-size:5px;
margin:0;
`
const A = styled.div`
margin:0;
display: block;
`
const H2 = styled.p`
text-align: left;
font-size: 16px;
color:#1B507E ;`

const H = styled.p`
color:white;
color:#1B507E ;
font-size: 40px;
font-weight: 700;
`