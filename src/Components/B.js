import React from 'react'
import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function B({}) {
  return (
   <Container>
        <TextBox>
            <First>
               <Text><Span>Exchange <T>Gift</T></Span> Cards at High Rates</Text>
            </First>
            <Line>

            </Line>
            <Second>
        <Tex>Gift card exchange in Nigeria has taken a new look and we are having a good run at that. Using customer-inclined conversion, we strive to provide the best possible gift card rates in Nigeria.

<Tt>With Cardtonic, you can buy and sell iTunes, Amazon, Steam Wallet, Google Play, Apple Store, eBay, Walmart, Sephora, OneVanilla, Nordstrom, Target, JCPenney, Best Buy, Nike, Hotels.com, Macy's, Gamestop, Xbox,Vanilla, G2A, American Express (AMEX), OffGamers, Foot Locker,Visa, Play Station and others.</Tt></Tex>
            </Second>
        </TextBox>
        <Contain>
        <Carousel variant="dark">
  <Carousel.Item variant="dark">
    <img
    style={{width: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h2>Download The App</h2>
      <p>Download our mobile application or egisterbon our website to start 
        tradinggift cards easily as bosses do. </p>
      <img style={{width: '250px'}}src="/Images/swiper-card-one-bottom.svg"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{width: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h2>Login or Register</h2>
      <p>Log in and  gget familiar with the three step gift card trading 
        process that takes only a few minute to complete .</p>
      <img style={{width: '250px'}}src="/Images/swiper-card-two-bottom.svg"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{width: '100%', height: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h2>Frendly Rates  🤙</h2>
      <p>Worry not about rate, we offer the best payouts 
        for your assets based on the current average market prices.</p>
      <img style={{width: '250px'}} src="/Images/swiper-card-three-bottom.svg"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{width:'100%', backgroundColor:'green'}}>
    <C >

    
    <img
    style={{width: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
  />
   </C>
    <Carousel.Caption style={{width:'80%', height: '100%', backgroundColor:'blue'}}>
      <h3>Sinplified User Interface</h3>
      <p>Our platform is built with your best interestat heart, 
        helping you to sell gift cards using the simplest user interface .</p>
      <img style={{width: '100px' }} src="/Images/swiper-card-four-bottom.svg"/>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{width: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h2>Quick Payment</h2>
      <p>Our payment system is amazingly coherent. You get your money almost 
        instantly, no fees attached, no limits..</p>
      <img style={{width: '250px'}} src="/Images/swiper-card-five-bottom.svg"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{width: '100%'}}
      className="d-block w-150"
      src="/Images/plain.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h2>All We Do Is Reply</h2>
      <p>Have a question? Our FAQ page is a whole knowledge base. 
        Our support team is also available via live chat.</p>
      <img style={{width: '250px'}} src="/Images/swiper-card-six-bottom.svg"/>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Contain>
   </Container>
  )
}

export default B

const Container = styled.div`
 width:100%;
 height:140vh;
 background-color:#00CEDE;
 display:flex;
 flex-direction:column;
 align-items:center;
margin: 0;
@media (max-width: 768px){
 height:auto;
}

`
const C = styled.div`
width:100%;
height:90%;
background-color:blue;
`
const TextBox = styled.div`
width:80%;
height:60vh;
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
margin-top: 100px;
@media (max-width: 768px){
  flex-direction:column;
  width:90%;
  height: auto;
  margin-top:30px;
}
`
const First = styled.div`
padding-top: 20px;
width:40%;
height:100%;
@media (max-width: 1100px){
  width:50%;
}
@media (max-width: 768px){
  width:100%;
  display: flex;
}
`
const Contain = styled.div`
width:80vh;
height:40vh;
border-radius:20px;
@media (max-width: 550px){
  width:90%;
  
}
`
const Line = styled.div`
width:0.1%;
height: 50%;
background-color:black;
`
const Second = styled.div`
width:40%;
height: 100%;
@media (max-width: 1100px){
  width:50%;
}
@media (max-width: 768px){
  width:100%;
}
`
const Text = styled.p`
color:white;
margin:0;
font-size: 50px;
text-align:left;
font-weight: 700;
padding-top: 20px;
@media (max-width: 350px){
 font-size: 30px;
}
`
const Tex = styled.p`
text-align: left;
font-size: 15px;
color:#1B507E ;
padding: 30px  0px  0px 60px;
@media (max-width: 768px){
  padding: 10px  0px  30px 0px;
}
`
const Tt = styled.p`
text-align: left;
padding-top:5vh;
`
const Span = styled.p`
color: #1B507E;
margin:0;
display: flex;
`
const T = styled.p`
margin:0;
color: white;
padding-left: 6px;
`