import React from "react"
import { ThemeProvider } from "styled-components"

const mint = {
  black: "#000000",
}

const Obj = ({ children }) => {
  return <ThemeProvider theme={mint}>{children}</ThemeProvider>
}

export default Obj
