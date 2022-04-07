import React from 'react'
import styled from 'styled-components'
import Slide from "./Slide"
import Footer from "./Footer"
import { FaArrowRight } from "react-icons/fa";
import { FcBusinessman, FcBusinesswoman, FcPositiveDynamic, FcAssistant, FcManager  } from "react-icons/fc";
function Apply() {
  return (
    <div>
      <Container>
          <Wrap1>
              <Textb>
                  <Text>
                  GiftCardize your Business
                  </Text>
                  <Line>
                   </Line>
                  <Tex>
                  Fly into the global gift card buzz and 
                   taking advantage of these fast-rising and 
                   gift-oriented assets for your business.
                  </Tex>
              </Textb>
              
              <Carousel>
                 <Slide />
               </Carousel>
              
              <Texb>
                  <Texx>
                  Use Cases
                  </Texx>
                  <Lin>
              </Lin>
              </Texb>
              <UseCase>
                  <Case>
                    <Icon>
                    <FcBusinessman size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Dropshippers
                      </T1>
                      <T2>
                      Thousands of individuals
                       and businesses are engaged in the dropshipping order 
                       fulfillment method that requires no stock or own 
                      inventory. But life can get even better when you discover a cheaper mode of payment
                      </T2>
                    </B>
                  </Case>
                  <Case> <Icon>
                    <FcAssistant size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Gamers
                      </T1>
                      <T2>
                      Whether you’re a steam nerd or a play station outcast,
                       you must at least need an endless supply of games to keep your lights on, but you would be burning a hole in your grandma’s 
                      pocket if you have to keep paying with cash.
                      </T2>
                    </B></Case>
                  <Case> <Icon>
                    <FcPositiveDynamic size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Ecommerce
                      </T1>
                      <T2>
                      Most gift cards exist in this industry because 
                      the brands understand their importance. Every business 
                      owner wants to maximize profit, and luckily,
                       reducing purchase costs is a good way to start that agenda.
                      </T2>
                    </B></Case>
                  <Case> <Icon>
                    <FcBusinessman size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Reward-Based Softwares
                      </T1>
                      <T2>
                      An average human likes to be rewarded, sadly, 
                      you can’t possibly reward everyone with cash 
                      especially when the geography and currency may vary. 
                      How about some amazon gift cards as rewards for the winners?
                      </T2>
                    </B></Case>
                  <Case> <Icon>
                    <FcManager size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Shoppers
                      </T1>
                      <T2>
                      It’s easy to be a shopaholic, where the problem starts is 
                      when it’s time to be a payaholic. You might be a sucker for 
                      designers, but it’s easier when you don’t have to pay for it, or, 
                      when you have to pay relatively lower for your product.
                      </T2>
                    </B></Case>
                  <Case> <Icon>
                    <FcBusinesswoman size='4rem'/>
                    </Icon>
                    <B>
                      <T1>
                      For Travel Agents
                      </T1>
                      <T2>
                      Whoever doesn’t want to explore the world? But
                       flights aren’t cheap these days, and hotels are not
                        smiling either. But only if you knew you can 
                      book cheaper flights and hotel rooms with gift cards, instead of your credit card.
                      </T2>
                    </B></Case>
              </UseCase>
              <Partners>
                   <Part>
                   <T1>
                   Partners Commitment
                      <T3>An official cardtonic partner commits to:</T3>
                      </T1>
                      <L>
                        <li>Become a Certified Cardtonic Partner</li>
                        <li>Have dedicated resources required</li>
                        <li>Be available for periodic meetings with relationship managers</li>
                        <li>Be transparent</li>
                        <li>Promote Cardtonic in their region</li>
                      </L>
                   </Part>
                   <Part2>
                <img  src={process.env.PUBLIC_URL + "/Images/p.svg"}/>
                   </Part2>
              </Partners>
          </Wrap1>
               <Wrap2>
                 <Partner>
              
                  <T1>
                  Shall we Begin?
                  </T1>
                  
                  <Tex>
                  Apply to become an official partner by filling the 
                  
                  form below or send an email to Partners@cardtonic.com.
                  
                   Note that this opportunity is only open to a limited selection.
                  </Tex>
                  <br>
                  </br>
                  <Tex>
                  This form is only for potential partners and businesses, not customers. If you want to trade gift cards, you can
                  <a href='/register'> register</a> here and see how to trade. You can also visit 
                   our <a href='/contact'>contact page</a> to get in touch with us.
                  </Tex>
                  <For><input type="text" placeholder='What is your name?' name='user_name' />
                  <input type="text" placeholder='What is your Busiess name?' name='user_name' />
                      <For2><input type="text" placeholder='Drop your Email' name='user_email' />
                      <input type="text" placeholder='your country' name='user_country' /></For2>
                      <textarea type="text" placeholder='Type your Message here in details...' name='user_message' /></For>
                      <Button>Submit <FaArrowRight size='1em' color="#FFFFFF"/></Button>
                 </Partner>
               
               </Wrap2>
               <Footer />
      </Container>
    </div>
  )
}

export default Apply
const Container = styled.div`
margin:0;
padding:0;
`
const Wrap1 = styled.div`
margin-top:20vh;
width:100%;
height:auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Wrap2 = styled(Wrap1)`
margin-bottom:10vh;
background-color: #F8F8F8;
`
const Textb = styled.div`
width:65%;
@media (max-width:768px){
  width:80%;
}
`
const Carousel = styled.div` 
margin:0 20%;
width:100%;
`

const Text = styled.p`
font-size:48px;
font-weight:800;
color:#002444;
margin-top:6vh;
@media (max-width:768px){
  font-size:30px;
}`

const Tex = styled.div`
text-align: left;
font-size: 15px;
color:#1B507E ;
a{
  text-decoration:none;
  color:green;
}
`

const Texb = styled.div`
width:40%;
display:flex;
justify-content:center;
align-items:center;
@media(maX-width:360px){
width:auto;
}
`
const Texx = styled.div`
font-size:50px;
font-weight:800;
color:#002444;
margin:5vh 0vh 1vh 0vh;
@media (max-width:768px){
  font-size:30px;
}
`
const Lin = styled.div`
height :100px;
width: 300px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position:absolute;
margin-top:10vh;

@media(maX-width:350px){
display:none;
}`
const Line = styled.div`
height :100px;
width: 300px;
border:solid 5px #00CEDE;
border-color:#00CEDE transparent transparent transparent;
border-radius:90%/60px 40px 0 0;
position:absolute;
margin-top:-4vh;
@media(maX-width:600px){
width:200px;
}
`
const UseCase = styled.div`
margin-top: 4vh;;
width: 46%;
display: grid;
@media(maX-width:1100px){
  height:auto;
}

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem;

    @media(maX-width:768px){
      display:flex;
      flex-direction: column;
      align-items:center;
      width:80%;
      
    }
    @media(maX-width:350px){
width:100%;
}
`
const Case = styled.div`
width:100%;
height:35vh;
display :flex;
justify-content: space-between;
@media(maX-width:1100px){
height:auto;
}

@media(maX-width:768px){
  width:100%;
  height:50%;
  
}
`
const Partner = styled.div`
width:59%;
@media(maX-width:7680px){
width:95%;
}
`
const Partners = styled.div`
width:57%;
height:40vh;
display:flex;
margin-top:5vh;
@media(maX-width:600px){
width:100%;
display:flex;
align-items:center;
justify-content:center;
}
`
const Icon = styled.div`
width:90px;
height:90px;
display :flex;
justify-content: center;
align-items:center;
border-radius:100%;
background-color:#FFF3E0;
`
const B = styled.div`
height:100%;
margin:0;
width:60%;
@media (maX-width:768px){
  width:100%;
  height:100%;
}
`

const T1 = styled.p`
font-size: 22px;
font-weight:800;
color:#1B507E;

@media(maX-width:768px){
  font-size:18px;
}
`
const T3 = styled.p`
font-size: 17px;
font-weight:700;
color:#1B507E;
@media(maX-width:768px){
  font-size:12px;
}
`

const T2 = styled.p`
font-size:12px;
color:#1B507E;
`
const Part = styled.div`
width:50%;
height:100%;
@media(maX-width:600px){
width:90%;
}
`
const Part2 = styled(Part)`
display:flex;
justify-content:right;
@media(maX-width:600px){
display:none;
}
img{
  width:70%;
}`
const L = styled.div`
margin-left:3vh;
li{
  font-size:14px;
color:#1B507E;
@media(maX-width:600px){
font-size:12px;;
}
}
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
   @media(maX-width:600px){
font-size:13px;;
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
   @media(maX-width:768px){
font-size:13px;;
}
}
`
const For2 = styled(For)`
display:flex;
justify-content:space-between;
@media(maX-width:768px){
flex-direction:column;
}
input{
  width:48%;
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
   @media(maX-width:768px){
font-size:13px;;
width:100%
}

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
 width:70%;
 height:50px;
}
`