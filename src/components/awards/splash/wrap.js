import React from "react"
import Box from "../../shared/splash-box"
import IkonLogo from "../../shared/ikon-logo"
import Rings from "./rings"
import Glimmer from "../../shared/glimmer"
import Video from "./video"
import SidePattern from "../../shared/side-pattern"
import StackedTitle from "../../shared/stacked-title"
import Menu from "./menu"
import Collage from "./collage"

const Ele = () => {
  return (
    <Box theme="green column">
      <IkonLogo location="center" type="awards" />
      <StackedTitle
        theme="light"
        type="splash"
        first="innovation"
        second="and"
        third="excellence"
        fourth="celebrating"
      ></StackedTitle>
      <Menu />
      <SidePattern pos="splash-left" />
      <SidePattern pos="splash-right" />
      <Rings />
      <Glimmer className="envy bottom" />
      <Video />
      <Collage />
    </Box>
  )
}
export default Ele
