import React, {useState} from 'react'
import { FaTimes } from "react-icons/fa";
import styled from "styled-components"
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }
  return (
    <SideContainer  >
        <Icon>
        <Closebar onClick={showMenu}/>
        </Icon>
        <Navbar>
        <Menu to="/contact" >Contact</Menu>
       <Menu to="/signin" >Sign in</Menu>
       <Menu to="/register"  >Register Now</Menu>
        </Navbar>
    </SideContainer>
  )
}

export default Sidebar

const SideContainer = styled.div`
position:fixed;
z-index:999;
background-color: black;
display:flex;
justify-content: center;
align-items:center;
width: 100%;
min-height:100vh;
top:0;
overflow: hidden;
`

const Closebar = styled(FaTimes)`
color:white;
position:absolute;

top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
`
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline:none;
`
const Menu = styled(Link)`
text-decoration: none;
font-weight: 600;
font-size:25px;
flex-wrap: nowrap;
color:#002444;
display: flex;
padding:16px 64px;
align-items: center;
justify-content: center;
list-style: none;
transition: 0.5s ease-in-out;
cursor: pointer;
&:hover{
    color:white;
    transition: 0.2s ease-in-out;
}
`
const Navbar = styled.div`
color:blue;
`