import React from "react"
import styled from "styled-components"
import Heading from "./welcome_section"

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = () => (
  <FullScreen>
    <Heading />
  </FullScreen>
)

export default Section
