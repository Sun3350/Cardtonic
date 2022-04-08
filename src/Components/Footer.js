import React from 'react'
import styled from "styled-components";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {GrApple} from "react-icons/gr";
import logo from "../images/logo.svg"
function Footer() {
  return (
    <Container>
       <TextBox>
           <First>
               <Logo href="#" ><img src={logo}/></Logo>
                <Tex>
                Bridging the gap between individuals who
                 need liquid cash and businesses who need discounted gift 
                 cards as a payment alternative.
                 Cardtonic is available for Web, iPhone, and Android users.
                </Tex>
                <Dline>

</Dline>
                <Number>
                +234 (0) 1 343 0626
                </Number>
                <Mail href="#">support@cardtonic.com</Mail>
                <Media>
                    <M href="#">FB</M>|
                    <M  href="#">TW</M>|
                    <M href="#">IG</M>
                </Media>
                <ButtonGroup>
       <Buttons><IoLogoGooglePlaystore size='2em' color="#FFFFFF" /><O><P>Download Now</P> Google Play</O></Buttons>
    <Button><GrApple size='2em'   color="#0E2F4E"/><O><P>Download Now</P>  App Store</O> </Button>

</ButtonGroup>
           </First>
           <Line>

           </Line>
           <Dline>

</Dline>
           <Second>
               <Text1>
               For The Customer
               <A ><a href='#'>Download On Andriod</a></A>
               <A ><a href='#'>Download On iPhone</a></A>
               <A ><a href='#'>Taste The Tonic</a></A>
               <A ><a href='#'>Cheak Out Rate</a></A>
               <A ><a href='#'>Talk To Us</a></A>
               <A ><a href='#'></a></A>
               </Text1>
               <Dline>

</Dline>
               <Text2>
               For The Business
                  <A><a href='#'>Visit Help Center</a></A>
                  <A><a href='#'>Become A Patern</a></A>
                  <A><a href='#'>#CTGivesBack</a></A>
                  <A><a href='#'>Work With US</a></A>
                  <A><a href='#'>Read The Blog</a></A>
                  <A><a href='#'>Read Our Terms</a></A>
            </Text2>
           </Second>
       </TextBox>
       <Dlin>

       </Dlin>
       <Copyright>© 2022 Cardtonic. All Rights Reserved.</Copyright>
    </Container>
  )
}

export default Footer
const Container = styled.div`
 width:100%;
 height:90vh;
 background-color:#000000;
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items:center;
 padding-bottom:30px;
margin: 0;
@media (max-width:768px){
  height:auto;
}
`
const TextBox = styled.div`
width:65%;
height:67vh;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 60px;
@media (max-width:768px){
  flex-direction:column;
  width:85%;
  height:auto;
}
`
const First = styled.div`
width:49%;
height:100%;
@media (max-width:768px){
  width:100%;
  height:auto;
}
`
const Logo = styled.a`
display:flex;
`
const Tex = styled.p`
font-size: 15px;
color:white;
text-align:left;
margin:20px 70px 0px 0px;
`
const Number = styled(Tex)`
`
const Mail = styled.a`
color: #4DD9EF;
margin-top:20px;
text-decoration: none;
font-weight: 600;
display:flex;
`
const Media = styled.div`

display:flex;
color: #4DD9EF;
`
const M = styled(Mail)`
margin:0;
`
const ButtonGroup = styled.div`
display:flex;
margin-top:30px;
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
`;
const Button = styled(Buttons)`
background-color:#EFEFEF;
color:#0E2F4E;
margin-left:10px;
`
const P = styled.p`
font-size:5px;
margin:0;
`
const O = styled.div`
margin:0;
display: block;
`
const Dline = styled.div`
background-color:#333333;
width:90%;
height:1px;
display:none;
margin-top: 4vh;
@media (max-width:768px){
  display:flex;
}
`
const Dlin = styled.div`
background-color:#333333;
width:90%;
height:1px;
margin-top: 4vh;
`
const Line = styled.div`
width:0.1%;
height: 50%;
background-color:#333333;
`
const Second = styled.div`
width:49.9%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
@media (max-width:768px){
  width:100%;
  display:flex;
  justify-content:center;
  flex-direction: column;
  height:auto;
}
`

const Text1 = styled.p`
width:30%;
height:50%;
text-align:left;
font-size:15px;
color:white;
float: inline-end;
font-weight:700;
margin:0px 0px 0px 70px;
@media (max-width:768px){
  width:70%;
  margin:8vh 10vh 0vh 5vh;
  font-size:13px;
}
`
const Text2 = styled(Text1)`
`
const A = styled.li`
list-style-type:none;
margin:10px 0px 0px 0px;
a{
  text-decoration:none;
  color:white;
  font-size:13px;
  font-weight:400;
  padding-top:20px;
  text-align:left;
  margin:0;
  @media (max-width:768px){
  
    font-size:15px;
}
}
`
const Copyright = styled.p`
color:white;
@media (max-width:768px){
  margin-top:6vh;
}
`