import React, {useState} from 'react'
import { FaTimes } from "react-icons/fa";
import styled from "styled-components"
import { Link } from "react-router-dom";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <SideContainer >
        <Icon isOpen={isOpen} onClick={toggle}>
        <Closebar />
        </Icon>
        <Navbar>
        <Menu to="/contact" onClick={toggle} >Contact</Menu>
       <Menu to="/signin" onClick={toggle}>Sign in</Menu>
       <Menu to="/register" onClick={toggle} >Register Now</Menu>
        </Navbar>
    </SideContainer>
  )
}

export default Sidebar

const SideContainer = styled.div`
position:fixed;
background-color: black;
z-index: 999;
width: 100%;
height:100%;
display:grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top:0;
`

const Closebar = styled(FaTimes)`
color:white;
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