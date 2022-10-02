import React from "react"
import Glimmer from "../../shared/glimmer"
import Outline from "../../shared/outline"
import Header from "./header"
import Box from "./box"
import Roulette from "./roulette"

const Ele = () => {
  return (
    <Box id="sec-categories">
      <Glimmer />
      <Header />
      <Roulette />
    </Box>
  )
}
export default Ele
