import React, {useRef} from 'react'
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import { RiGlobalFill } from "react-icons/ri";
function Contact() {
  
  return (
    <Container>
       <Wrap>
         <Formbox>
         <Text>Leave a Message.</Text>
            <Lin>
              
            </Lin>
            <Tex>Please leave us a message by filling the form below.
               Average response time is 1 hour. For urgent enquiries,
                use the live chat or call <a href='#'>+2347060502770</a>.</Tex>
                    
                      <For><input type="text" placeholder='What is your name?' name='user_name' />
                      <input type="text" placeholder='Drop your Email' name='user_email' />
                      <input type="text" placeholder='Message Subject' name='user_messagetype' />
                      <textarea type="text" placeholder='Type your Message here in details...' name='user_message' /></For>
                      < ButtonGroup><Button>Submit <FaArrowRight size='1em' color="#FFFFFF"/></Button>
                      <ButtonGroup2>
                        <F>FB</F>
                        <I>IG</I>
                        <T>TW</T>
                        <W>WA</W>
                        <G>GM</G>
                      </ButtonGroup2>
                      
                      </ButtonGroup>
                  
         </Formbox>
       </Wrap>
       <Boxes>
        <Box1>
          <H>Get Started Now</H>
          <H2>Download the Cardtonic App or
             register on web and start trading like bosses do.</H2>
        </Box1>
        <Box2>
        <ButtonGroups>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><A><P>Download Now</P> Google Play</A></Buttons>
   <Buton><GrApple size='2em'   color="#0E2F4E"/><A><P>Download Now</P>  App Store</A> </Buton>
   <Butto><RiGlobalFill size='2em'   color="#0E2F4E"/><A><P>Signin to Cardtonic</P>On the Web</A> </Butto>
</ButtonGroups>
        </Box2>
          </Boxes>
      <Footer />
    </Container>
  )
}

export default Contact

const Container = styled.div`
`
const Wrap = styled.div`
width:100%;
height:150vh;
display:flex;
justify-content: center;
align-items:center;
@media (max-width:550px){
  height:auto;
  margin-top:10vh;
}
`
const Formbox = styled.div`
width:60%;
height:100vh;
@media (max-width:1000px){
 width:90%;
}
@media(max-width:768px){
  height:auto;
  margin-top:15vh;
}
`
const Text = styled.p`
color:white;
margin:0;
color:#1B507E ;
font-size: 55px;
text-align:left;
font-weight: 700;`

const Lin = styled.div`
height :100px;
width: 250px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position: absolute;`

const Tex = styled.p`
text-align: left;
font-size: 16px;
color:#1B507E ;
margin:3vh 32vh 0px 0px;
@media (max-width:768px){
  margin:3vh 0vh 0vh 0vh;
}
a{
  color:#1B507E ;
  text-decoration:none;
}
`
const ButtonGroup = styled.div`
width:100%;
display:flex;
margin-top:3vh;
justify-content: space-between;
@media (max-width:768px) {
  flex-direction:column;
  width:auto;
}
`
const ButtonGroup2 = styled.div`
display:flex;
@media (max-width:768px){
 margin-top:4vh;
}
@media (max-width:490px){
 height:auto;
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  grid-auto-rows: minmax(50px, auto);
}
`
const Button = styled.button`
background:#000000;
color:#FFFFFF;
width:45vh;
height:60px;
display:flex;
padding:0vh 5vh 0vh 5vh;
justify-content:space-between;
align-items:center;
border-radius:20px;
font-size:17px;
font-weight: 400;
border: 0;
outline: 0;
cursor:pointer;
@media (max-width:768px){
 width:40vh;
}
@media (max-width:350px){
 width:20vh;
}
`
const F = styled(Button)`
width: 8vh;
background-color:#2A679E ;
display:flex;
justify-content:center;
align-items:center;
border-radius:20px;
margin-right:1vh;
`
const I = styled(F)`
background-color: black;
`
const T = styled(F)`
background-color: #69C2E8;
`
const W = styled(F)`
background-color: #03D07D;
`
const G = styled(F)`
background-color:#FF0000 ;
margin:0;
`
const For = styled.div`
margin-top:3vh;
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
}
textarea{
  width:100%;
  height:20vh;
  border-radius:20px;
  background-color: white;
  color: #00CEDE;
  border:solid 1px;
  border-color:  #00CEDE;
   padding:3vh 0vh 0vh 5vh;
   font-size:16px;
   margin-top:3vh;
   font-weight:700;
   ::placeholder{
     color:#00CEDE;
   }
}
`
const Boxes = styled.div`
width:100%;
height:50vh;
display:flex;
align-items:center;
flex-direction: column;
background-color:#F8F8F8;
@media (max-width:768px){
  height: auto;
}
`

const Box1 = styled.div`
width:60%;
height:40%;
padding-top:5vh;
`

const Box2 = styled.div`
width:100%; 
height:100%;
display:flex;
justify-content:center;
align-items: center;
@media (max-width:768px){
 
  height:auto;
}
`
const ButtonGroups = styled.div`
display:flex;
margin-top:20px;
@media(max-width:768px){
  flex-direction:column;
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
const Buton = styled(Buttons)`
background-color:#EFEFEF;
color:#0E2F4E;
margin-left:3vh;
@media (max-width:768px){
  margin:3vh 0vh 0vh 0vh;
}
`
const Butto = styled(Buttons)`
background-color:#C0FAFF;
color:#16354C;
margin-left:3vh;
@media (max-width:768px){
  margin:3vh 0vh 4vh 0vh;
}
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