import React, {useState} from 'react'
import styled from "styled-components";
import { VscThreeBars } from "react-icons/vsc";
import {Link, useNavigate} from "react-router-dom"
import logo2 from "../images/logo2.svg"
import { AiFillCloseCircle } from "react-icons/ai";
import "../App.css"

function Header() {
  let navigate = useNavigate();
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }
  return (
    <Container>
      <a href=''>
        <img onClick={() => {navigate("/")}} src= {logo2}/>
      </a>
        <Navbar>
        <Menu to="/contact" >Contact</Menu>
       <Menu to="/signin" >Sign in</Menu>
       <Butto onClick={() => {navigate("/register")}}>Register Now</Butto>
        </Navbar>
        <Bars onClick={showMenu}/>
       <nav className={active ? 'slider active' : 'slider'}>
         <ul>
           <div className="closed">
             <AiFillCloseCircle className='close' onClick={showMenu}/>
           </div>
           <li onClick={showMenu} ><Link to="/">Home</Link></li>
           <li onClick={showMenu} ><Link to="/contact">Contact</Link></li>
           <li onClick={showMenu} ><Link to="/signin">Sign in</Link></li>
           <li onClick={showMenu} ><Link to="/register">Register</Link></li>
         </ul>
       </nav>
   </Container>
  )
}

export default Header 
const Container = styled.div`
min-height:60px;
width:100%;
position:absolute;
display: flex;
padding:7vh 19vh;
left:0;
right:0;
top:0;
@media (max-width:1000px){
  padding:5vh 10vh ;
}
@media (max-width:768px){
  padding:5vh 2vh 0vh 2vh;
}

`
const Menu = styled(Link)`
text-decoration: none;
font-weight: 600;
font-size:14px;
flex-wrap: nowrap;
padding: 0 3vh;
color:#002444;
@media (max-width:768px){
 display:none;
}
`
const Navbar = styled.div`
display:flex;
align-items: center;
justify-content:right;
flex:1;
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
@media (max-width:768px){
  display:none;
}
`
const Bars = styled(VscThreeBars)`
display:none;
@media (max-width:768px){
    display:flex;
    align-items: center;
    transform:translate(-100%, 75%);
    font-size: 1.8rem;
    cursor:pointer;
    margin:0;
    padding:0;
}
`