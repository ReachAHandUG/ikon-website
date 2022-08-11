import React from "react"
import Box from "../../shared/splash-box"
import Slider from "./slides"
import Rings from "./rings"
import IkonLogo from "../../shared/ikon-logo"

const Ele = () => {
  return (
    <Box theme="brown">
      <IkonLogo location="center" />
      <Slider />
      <Rings />
    </Box>
  )
}
export default Ele
