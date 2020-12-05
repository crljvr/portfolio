import * as React from "react"
import styled from "styled-components"

const Glow = styled.div`
  color: #fff;
  padding: 0.3em;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff,
    0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
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
