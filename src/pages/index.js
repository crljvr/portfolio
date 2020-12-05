import React from "react"
import { ThemeProvider } from "styled-components"
import { WelcomeSection } from "../components/sections/welcome"
import { BiographySection } from "../components/sections/biography"
import "../components/index.css"

const theme = {
  colors: {
    winterSky: "#ff006e",
    blueViolet: "#8338EC",
    azure: "#3A86FF",
    charlestonGreen: "#212529",
    darkPurple: "#362B3B",
  },
  fonts: ["comfortaa", "sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <WelcomeSection />
    <BiographySection />
  </ThemeProvider>
)

export default IndexPage
