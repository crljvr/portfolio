import * as React from "react"
import styled from "styled-components"

const Glow = styled.div`
  color: #fff;
  padding: 0.3em;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
    0 0 40px ${({ theme: { colors } }) => colors.winterSky},
    0 0 80px ${({ theme: { colors } }) => colors.winterSky},
    0 0 90px ${({ theme: { colors } }) => colors.winterSky},
    0 0 100px ${({ theme: { colors } }) => colors.winterSky},
    0 0 150px ${({ theme: { colors } }) => colors.winterSky};
`

const NoGlow = styled.div`
  color: #212529;
  padding: 0.3em;
`

const Letter = ({ children, glitch }) => {
  const [on, toggleOn] = React.useState(true)

  const startGlitch = () => {
    setTimeout(() => toggleOn(!on), Math.floor(Math.random() * 1000))
  }

  React.useEffect(() => {
    glitch && startGlitch()
  }, [on, glitch])

  return on ? <Glow>{children}</Glow> : <NoGlow>{children}</NoGlow>
}

export default Letter
