import React from "react"
import styled from "styled-components"
import HeroImg from "../../../images/content/cut-out-e.png"

const Box = styled.figure`
  width: 27.99vw;
  height: 32.529vw;
  position: absolute;
  top: 0;
  right: 19.006vw;

  img {
    width: 85%;
    height: 85%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.8;
  }

  @media screen and (max-width: 766px) {
    width: 57.99vw;
    height: 72.529vw;
  }
`

const Ele = () => {
  return (
    <Box>
      <img src={HeroImg} alt="" />
    </Box>
  )
}
export default Ele
