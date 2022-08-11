import React from "react"
import styled from "styled-components"
import Video from "../../shared/video"
import { AwardsPageData } from "../data"

const Box = styled.figure`
  width: 33.447vw;
  height: 24.708vw;
  position: absolute;
  top: 20vw;
  left: 0;
  z-index: 0;

  .c-video-box {
    width: 100%;
    height: 100%;
  }

  video,
  img {
    object-fit: contain;
  }

  @media screen and (max-width: 766px) {
    position: relative;
    top: 0;
    width: 100%;
    height: 60vw;
  }
`

const Ele = () => {
  return (
    <Box>
      <Video
        poster={AwardsPageData().harness_image.fluid.src}
        src={AwardsPageData().harness_loop.url}
      />
    </Box>
  )
}
export default Ele
