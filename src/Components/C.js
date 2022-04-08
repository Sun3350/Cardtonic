import React from 'react'
import styled from "styled-components"
import { useNavigate} from "react-router-dom"
import p from "../images/p.png"
function C() {

  let navigate = useNavigate();
  return (
    <Container>
        <TextBox>
            <First>
               <Tex>Are you willing to fly into the global gift card buzz and start taking advantage
                  of these fast-rising and gift-oriented assets for 
                 your business? Then, you might be interested in our partnership program.</Tex>
            </First>
            <Line>

            </Line>
            <Second>
            <Text>Become a Partner</Text>
            <Lin>
              
            </Lin>
            </Second>
        </TextBox>
         <Image> <img src={p}/></Image>
        <Button onClick={() => {navigate("/apply")}}>Apply Now</Button>
        <Lim>Limited Selection Applies</Lim>
   </Container>
  )
}

export default C


const Container = styled.div`
 width:100%;
 height:140vh;
 background-color:#EFF8FF;
 display:flex;
 flex-direction:column;
 justify-content: center;
 align-items:center;
margin: 0;
@media (max-width:768px){
  height:auto;
}
`
const TextBox = styled.div`
width:64%;
height:25vh;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-top: 100px;
@media (max-width:1100px){
  width:78%;
}
@media (max-width:768px){
  flex-direction: column-reverse;
  height:auto;
margin:0;
}
`
const First = styled.div`
width:49%;
height:100%;
@media (max-width:1100px){
  height:auto;
}
@media (max-width:768px){
  width: 100%;
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
@media (max-width:1100px){
  height:auto;
}
@media (max-width:768px){
width:100% ;
}
`
const Text = styled.p`
color:white;
margin:0;
color:#002444 ;
font-size: 45px;
text-align:left;
font-weight: 700;
padding:40px 0px 0px 5vh;
  @media (max-width:500px){
    font-size: clamp(1rem, 10vw, 2rem); 
  }

`
const Tex = styled.p`
padding:30px 15vh 0px 0px;
text-align: left;
font-size: 15px;
color:#1B507E ;
@media (min-width:600px) and (max-width:768px){
text-align: center;
padding:0;
}
@media(max-width:600px){
text-align: left;
padding:0;
}


`
const Lin = styled.div`
height :100px;
width: 300px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
  @media (max-width:768px){
    width:200px;
    margin:0;
  }
`
const Image = styled.div`
img{
  width:95%;
  @media (max-width:768px){
    width:94%;
  }
}
`
const Button = styled.button`
background:#1B507E;
color:#FFFFFF;
width:160px;
height:50px;
border-radius:10px;
font-size:15px;
font-weight: 800;
border: 0;
outline: 0;
box-shadow: 0px 2px 2px lightgray;
margin-top: 40px;
cursor:pointer;`

const Lim = styled.p`
color: #FF0000;
font-size: 12px;
margin-top: 2vh;
`