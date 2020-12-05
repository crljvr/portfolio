import * as React from "react"
import styled from "styled-components"
import { Letter } from "../../shared/neon"

const Word = styled.div`
  display: flex;
  padding: 0.2em;
`

const Flex = styled.div`
  display: flex;
`

const Heading = () => (
  <Flex>
    <Word>
      <Letter>
        <h1>C</h1>
      </Letter>
      <Letter>
        <h1>A</h1>
      </Letter>
      <Letter>
        <h1>R</h1>
      </Letter>
      <Letter>
        <h1>L</h1>
      </Letter>
    </Word>
    <Word>
      <Letter>
        <h1>J</h1>
      </Letter>
      <Letter glitch>
        <h1>O</h1>
      </Letter>
      <Letter>
        <h1>V</h1>
      </Letter>
      <Letter>
        <h1>È</h1>
      </Letter>
      <Letter>
        <h1>R</h1>
      </Letter>
    </Word>
  </Flex>
)

export default Heading
