import React from "react"
import styled, { css } from "styled-components"
import { TribeData } from "./data"

const Box = styled.div`
  position: absolute;
  bottom: 0;
  width: 64.766vw;
  height: 27.187vw;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    width: 70%;
    height: 37vw;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    height: 62vw;
  }
`

const CutOut = styled.figure`
  position: absolute;
  bottom: 0;
  width: 40%;
  height: 100%;

  ${props =>
    props.left &&
    css`
      left: 0%;
      z-index: 1;
    `}

  ${props =>
    props.right &&
    css`
      left: 55%;
      z-index: -1;
      width: 50%;
      height: 105%;
    `}

    img {
    object-fit: contain;
    width: 95%;
    height: 95%;
    position: absolute;
    bottom: 0;
  }
`

const Ele = () => {
  return (
    <Box>
      <CutOut left>
        <img src={TribeData().left_image.fluid.src} alt="" />
      </CutOut>
      <CutOut right>
        <img src={TribeData().right_image.fluid.src} alt="" />
      </CutOut>
    </Box>
  )
}
export default Ele
