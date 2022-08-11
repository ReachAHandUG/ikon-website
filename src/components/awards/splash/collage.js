import React from "react"
import styled, { css, keyframes } from "styled-components"
import goldPlate from "../../../images/elements/gold-plate.png"
import { AwardsPageData } from "../data"

const moveUp = keyframes`
  0%{
    opacity: 0;
    transform: translate3d(0, 6rem, 0)
  }

  100% {
    opacity: 1; 
    transform: none; 
  }
`

const Box = styled.div`
  position: absolute;
  bottom: 0;
  width: 64.766vw;
  height: 26.187vw;
  z-index: 1;
  background-image: url(${goldPlate});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;

  .page-has-loaded & {
    animation: ${moveUp} 1.5s cubic-bezier(0.22, 1, 0.36, 1) both 1s;
  }

  .clear-splash-delays & {
    animation-delay: 0.125s;
  }

  @media screen and (max-width: 1023px) {
    width: 70%;
    height: 55vw;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    height: 55vw;
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
        left: 10%;
        z-index: 1;
      `}

    ${props =>
      props.center &&
      css`
        left: 30%;
        z-index: 0;
      `}

    ${props =>
      props.right &&
      css`
        left: 52%;
        z-index: -1;
      `}

    img {
        object-fit: contain; 
        width: 90%;
        height: 90%;
        position: absolute;
        bottom: 0; 
    }

    @media screen and (max-width: 1023px){
      img {
        width: 60%;
        height: 60%;
        object-fit: cover;
        left: 20%;
      }
    }


    @media screen and (max-width: 766px){
      img {
        height: 100%;
        width: 100%;
        object-fit: cover; 
        left: auto; 
      }
    }
`

const Ele = () => {
  return (
    <Box>
      <CutOut left>
        <img src={AwardsPageData().left_image.fluid.src} alt="" />
      </CutOut>
      <CutOut center>
        <img src={AwardsPageData().center_image.fluid.src} alt="" />
      </CutOut>
      <CutOut right>
        <img src={AwardsPageData().right_image.fluid.src} alt="" />
      </CutOut>
    </Box>
  )
}
export default Ele
