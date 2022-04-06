import React from 'react'
import styled from "styled-components";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import {VscBellDot } from "react-icons/vsc";
import { useNavigate} from "react-router-dom"
import {IoPeople } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
function Section() {
  let navigate = useNavigate();
  return (
    <Wrap>
      <Top>
        <Circle>

        </Circle>
    <Left>
     <H1>Sell Gift Cards For Naira.</H1>
     <Line>

     </Line>
     <H2>Exchange your gift cards at amazing rates in split seconds.</H2>
     <ButtonGroup>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><A><P>Download Now</P> Google Play</A></Buttons>
    <Button><GrApple size='2em'   color="#0E2F4E"/><A><P>Download Now</P>  App Store</A> </Button>

</ButtonGroup>

  </Left>
    <Right>
      <img src="/Images/y.png" alt=""/>
  </Right>
  </Top>
  <Boxes>
         
         <Box1 >
           <B>  <VscBellDot size='2em' color="#1A507E" background-color='#DEF9FB'/>
           <Heading>Instant Payment</Heading>
           <Paragraph>Using state-of-the-art payment procedures, 
            you are guaranteed to get your payment 
            sent to your account within minutes</Paragraph></B>
         </Box1>
      <Box2>
      <B>      <IoPeople size='2em' color="#FDAD00" background-color='#FDAD00'/>
           <Head>Cross-Platform Availability</Head>
           <Paragraph>Sell any gift card, anywhere, anytime, using our modern gift card 
             trading application available on Android, iOS and web browser.</Paragraph></B>
      </Box2>
      <Box3>
      <B>           <IoCheckmarkCircleOutline size='2em' color="#1A507E" background-color='##E6FAFC'/>
           <Head>Trusted And Secure</Head>
           <Paragraph>Trade with high confidence, as we assure you the highes 
             level of encryption and professionally audited exchange system.</Paragraph></B>
      </Box3>
     </Boxes>
     <Butto onClick={() => {navigate("/register")}}>Register Now</Butto>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100%;
height:170vh;
display:flex;
margin:0;
align-items: center;
justify-content:center;
flex-direction:column;
@media (max-width:768px){
  height:auto;
}
`
const Top = styled.div`
width:100%;
height:70vh;
display:flex;
margin-top:20vh;
align-items: center;
justify-content:center;
@media (max-width:768px){
  flex-direction: column;
  height:auto;
}
`
const Buttom = styled.div`
`
const Left = styled.div`
width: 33%;
height: 70vh;
display:flex;
flex-direction:column;
@media (max-width:768px){
  width:90%;
  height:auto;
  display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
`
const Right = styled.div`
width: 35%;
height: 72vh;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:768px){
  width:90%;
  height:auto;
  margin:7vh 0vh 7vh 0vh ;
}
img{
  width:90%;
  @media (max-width:768px){
    width:70%;
  }
}

`
const Circle = styled.div`
width: 100px;
height: 100px;
background-color:#EFEFEF;
border-radius: 100%;
position: absolute;
z-index:-1;
left:0;
top:0;
margin:25vh ;
@media (max-width:768px){
  position:absolute;
  left:0;
  margin:16vh 0vh 0vh 5vh;
}

`
const Line = styled.div`
height :100px;
width: 300px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position:absolute;
margin-top:60px;
@media(max-width: 768px){
  margin-right:100px;
  width:250px;
}
@media(max-width: 425px){
  display:none;
}
`
const H1 = styled.div`
font-size: clamp(2rem, 12vw, 2.5rem); 
  color:#002444;
  font-weight:700;
  
`
const H2 = styled.div`
color: #002444;
font-size: clamp(1rem,1.8vw, 3rem); 
padding-top:6vh;
`
const ButtonGroup = styled.div`
display:flex;
padding-top:7vh;
@media(max-width: 768px){
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
`;
const Button = styled(Buttons)`
background-color:#EFEFEF;
color:#0E2F4E;
margin-left:10px;
@media(max-width: 768px){
  margin:10px 0px 0px 0px
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

const Boxes = styled.div`
width:100%;
height:50vh;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
@media (max-width: 768px){
  width:100%;
  flex-direction:column;
  justify-content: center;
  height: auto;
  display:flex;
  align-items:center;
  margin-bottom:10vh;
}
`
const B = styled.div`
margin:18px 18px 18px;
`
const Box1 = styled.div`
display: flex;
flex-direction:column;
column-gap:0px;
width: 230px;
height:230px;
background-color:#002444;
color:white;
margin:0px 40px 0px 0px ;
text-align:left;
border-radius:15px 15px 15px 15px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
transition: ease background-color, color 3ms;
transition-duration:2s;
transition-delay: .5s;
&:hover{
  background-color:white;
  color:#002444;
}
@media (max-width: 768px){
  margin:40px 25vh 0px 25vh ;
  width:auto ;
  height:auto;
}
@media (max-width: 500px){
  margin:40px 15vh 0px 15vh ;
  width:auto ;
  height:auto;
}
@media (max-width: 400px){
  margin:40px 8vh 0px 8vh ;
  width:auto ;
  height:auto;
}
`;

const Box2 = styled(Box1)`
background-color:#FFFFFF;
color:#FFFF;
&:hover{
  background-color:#002444;
  color:#FFFF;
}
`
const Box3 = styled(Box1)`
background-color:#FFFFFF;
&:hover{
  background-color:#002444;
  color:#FFFF;
}
`
const Heading = styled.p`
 font-weight: 700;
 margin: 7px 0px 7px 0px;
 font-size: 15px;
`
const Paragraph = styled.p`
color:#B2BDC6;
font-size: 11px;
margin:0px;
font-weight:500;
`
const Head = styled.p`
margin: 7px 0px 7px 0px;
font-weight: 700;
color:#16354C;
font-size: 15px;

`
const Butto = styled.button`
background:#F0F0F0;
color:#16354C;
width:150px;
height:50px;
border-radius:10px;
font-size:15px;
font-weight: 800;
border: 0;
outline: 0;
box-shadow: 0px 2px 2px lightgray;
cursor:pointer;

`