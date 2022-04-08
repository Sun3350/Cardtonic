import React from 'react'
import styled from "styled-components"
import azcentral from "../images/azcentral..svg"
import punch from "../images/punch..svg"
import digital from "../images/digital..svg"
import vanguard from "../images/vanguard..svg"
import match from "../images/match..svg"
import techpoint from "../images/techpoint..svg"

function G() {
  return (
      <Container>
    <TextBox>
    <First>
       <Tex>As a demonstration of our quality service and awesome impression, 
           we have been published by some platforms across Nigeria and beyond.</Tex>
    </First>
    <Line>

    </Line>
    <Second>
    <Text>Cardtonic <Lin>
      
      </Lin>in the news</Text>
    </Second>
</TextBox>
<News>
    <N href='#'><img src={vanguard} /></N>
    <N href='#'><img src={azcentral}/></N>
    <N href='#'><img src={punch}/></N>
    <N href='#'><img src={match} /></N>
    <N href='#'><img src={digital}/></N>
    <N href='#'><img src={techpoint}/></N>
</News>
<Gril>
<Dline>

</Dline>
<A href='#'>Click here to follow our #GiveBack charity program</A></Gril>
</Container>
  )
}

export default G
const Container = styled.div`
 width:100%;
 height:90vh;
 background-color:#F8F8F8;
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items:center;
 padding-bottom:30px;
margin: 0;
@media (max-width:1100px) {
  height:auto;
}
`
const TextBox = styled.div`
width:65%;
height:30vh;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin:10vh 0 10vh 0;
@media (max-width:1100px) {
  width:80%;
}
@media (max-width:768px) {
  flex-direction:column-reverse;
  width:80%;
  height: auto;
  margin: 5vh 0 10vh 0 ;
}
`
const First = styled.div`
width:49%;
height:100%;
@media (max-width:768px) {
  width:100%
}
`
const Line = styled.div`
width:0.1%;
height: 50%;
background-color:black;
`
const Second = styled.div`
width:49.9%;
height: 100%;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width:768px) {
  width:100%;
 padding: 0px 0px 7vh 0px;
 display: flex;
flex-direction:column;
align-items:flex-start;
}
`
const Text = styled.p`
color:white;
margin:0;
color:#002444 ;
font-size: 54px;
text-align:left;
font-weight: 700;
padding:40px 0px 0px 50px;
@media (max-width:1000px){
  font-size: 40px;
  padding:30px 0px 0px 0px;
}
`
const Tex = styled.p`
margin-top:9vh;
text-align: left;
font-size: 16px;
color:#1B507E ;
@media (max-width:1100px){
  padding:15px 0px 0px 0px;
}
`
const Lin = styled.div`
height :100px;
width: 250px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position: absolute;
@media (max-width:768px) {
  width:200px;
}
`
const News = styled.div`
width: 72%;
@media (max-width:1100px) {
 width:87%;
 margin-bottom: 10vh;
}
`
const N = styled.a`
margin:20px;
@media (max-width:1000px) {
  margin:20vh 0vh 0vh 10vh;
}
img{
  width:120px;
  @media (max-width:1100px) {
  width: 110px;
}
}
img:hover{
  transform: scale(1.1);
  transition-duration: 0.5s;
}
`
const A = styled.a`
margin-top: 7vh;
color: #4DD9EF;
padding-bottom:30px;
text-decoration: none;
font-weight: 600;
`
const Dline = styled.div`
background-color:#D8D8D8;
width:60%;
height:1px;
`
const Gril = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:85%;
`
