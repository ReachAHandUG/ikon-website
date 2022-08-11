import React from "react"
import styled from "styled-components"
import Glimmer from "../../shared/glimmer"
import Header from "./header"
import List from "./list"
import ContentBox from "../../shared/content-box"
import Outline from "../../shared/outline"

const Box = styled.section`
  position: relative;
  overflow: hidden;

  .o-glimmer {
    z-index: -1;

    &.left {
      left: -30%;
      opacity: 0.2;
      top: 2%;
    }

    &.right {
      right: -35%;
      opacity: 0.4;
      top: 35%;
    }
  }
`

const Ele = () => {
  return (
    <Box id="about">
      <ContentBox>
        <Header />
      </ContentBox>
      <List />
      <Outline title="prestige" />
      <Glimmer className="left" />
      <Glimmer className="right" />
    </Box>
  )
}
export default Ele
