import React from "react"
import ContentBox from "../../shared/content-box"
import Glimmer from "../../shared/glimmer"
import Outline from "../../shared/outline"
import Box from "./box"
import Header from "./header"
import Hero from "./hero"
// import Button from "../../shared/inline-button"

const Ele = () => {
  return (
    <Box>
      <Hero />
      <ContentBox width="o-accolade-contentbox">
        <Header />
        {/* <div className="cta">
          <Button type="box" label="Watch the Film" />
        </div> */}
      </ContentBox>
      <Glimmer />
      <Outline title="heritage" />
    </Box>
  )
}
export default Ele
