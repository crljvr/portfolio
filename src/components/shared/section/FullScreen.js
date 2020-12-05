import * as React from "react"
import styled from "styled-components"

const FullScreenDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ center }) => center && `flex`};
  justify-content: ${({ center }) => center && `center`};
  align-items: ${({ center }) => center && `center`};
`

const FullScreen = ({ children }) => (
  <FullScreenDiv center>{children}</FullScreenDiv>
)

export default FullScreen
