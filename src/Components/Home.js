import React from 'react'
import Section from './Section'
import B from "./B"
import C from "./C"
import D from "./D"
import G from "./G"
import Page from "./Page"
import Footer from "./Footer"
import styled from "styled-components";
function Home() {
  return (
    
  <Container>
    <Section />
    <B />
    <C />
   <D />
     <G />
     <Page />
  <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`

height: 100vh; 
`