import React from "react"
import styled from "styled-components"
import Video from "../../shared/video"
import { AwardsPageData } from "../data"

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.04;
  filter: grayscale(100%);
`
const Ele = () => {
  return (
    <Box>
      <Video
        src={AwardsPageData().background_video.url}
        poster={AwardsPageData().image.fluid.src}
      />
    </Box>
  )
}
export default Ele
