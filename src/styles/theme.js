import React from "react"
import { ThemeProvider } from "styled-components"

const mint = {
  black: "#000000",
}

export default ({ children }) => {
  return <ThemeProvider theme={mint}>{children}</ThemeProvider>
}
