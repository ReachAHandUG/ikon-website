import React from "react"
import Box from "../shared/splash-box"
import IkonLogo from "../shared/ikon-logo"
import Rings from "./rings"
import Glimmer from "../shared/glimmer"
import StackedTitle from "../shared/stacked-title"
import Collage from "./collage"
import Shape from "./shape"
import Caption from "./caption"

const Ele = () => {
  return (
    <Box theme="column">
      <IkonLogo location="center" type="tribe" />
      <StackedTitle
        theme="cream"
        type="guild"
        first="Connect"
        second="and"
        third="Grow"
        fourth="A Space to"
      ></StackedTitle>
      <Caption />
      <Collage />
      <Shape />
      <Rings />
      <Glimmer className="envy top" />
    </Box>
  )
}
export default Ele
