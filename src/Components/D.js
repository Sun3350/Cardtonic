import React from 'react'
import styled from "styled-components"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import { useNavigate} from "react-router-dom"
function D() {
  let navigate = useNavigate();
  return (
    <Container>
    <TextBox>
        <First>
        <Lin>
              
              </Lin>
        <Text>Download Cardtonic App</Text>
        
            <Tex>Experience the best of Cardtonic as you download
                 our mobile application to your phone or tablet.
                 Available for iOS and Android operating systems.</Tex>
                 <Butto onClick={() => {navigate("/register")}}>Register Now</Butto>
        </First>
        <Line>

        </Line>
        <Second>
        <ButtonGroup>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><A><P>Download Now</P> Google Play</A></Buttons>
    <Button><GrApple size='2em'   color="#0E2F4E"/><A><P>Download Now</P>  App Store</A> </Button>
</ButtonGroup>
<Image><img src='/Images/image-2.png' width={'350px'} height={'250px'} /></Image>
        </Second>
    </TextBox>
</Container>
  )
}

export default D
const Container = styled.div`
 width:100%;
 height:90vh;
 background-color:#FFFFFF;
 display:flex;
 flex-direction:column;
 align-items:center;
margin: 0;
`
const TextBox = styled.div`
width:64%;
height:95vh;
display:flex;
flex-direction: row;
justify-content: center;
margin-top: 60px;
@media (max-width:1100px){
   width:83%;
 }
 @media (max-width:768px){
   flex-direction: column;
   width:80%;
   height:auto;
 }
`
const First = styled.div`
padding: 0px 40px 0px 0px;
width:49%;
height:100%;
@media (max-width:768px){
 width:100%;
 padding: 0px;
}
`
const Line = styled.div`
width:0.1%;
height: 35%;
background-color:black;
@media (max-width:768px){
  display:none;
}
`
const Second = styled.div`
width:49%;
height: 100%;
display: flex;
flex-direction:column;
justify-content:space-between;
@media (max-width:768px){
  width:90%;
}
`
const Text = styled.p`
color:white;
margin:0;
color:#1B507E ;
font-size: 50px;
text-align:left;
font-weight: 800;
@media (max-width:768px){
  font-size: 40px;
}
@media (max-width:425px){
  font-size: 32px;
}
`
const Lin = styled.div`
height :100px;
width: 300px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position: absolute;
margin-top: 60px;
@media (max-width:360px){
  width:200px;
}
@media (max-width:768px){
  margin-top: 45px;
}
`

const Tex = styled.p`
padding-top: 20px;
margin:0;
text-align: left;
font-size: 15px;
color:#1B507E ;
`
const ButtonGroup = styled.div`
display:flex;
margin-top:20px;
justify-content:right;
@media (max-width:768px){
   flex-direction: column;

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
 }
`
const Butto = styled.button`
background-color:#FFEACA;
color:#16354C;
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
margin:30px 0px 0px 0px;
@media (max-width:768px){
  display:none;
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
const Image = styled.div`
img{
  width:95%;
  @media (max-width:768px){
    width:80%;
    height: 70%;
    float:right;
  }
}
`