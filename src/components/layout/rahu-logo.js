import React from "react"
import styled from "styled-components"
import Img from "../../images/logos/rahu-logo.svg"

const Box = styled.a`
  height: 1.547vw;
  width: 1.547vw;
  position: fixed;
  left: 2.778vw;
  bottom: 3.874vw;
  z-index: 2;
  background-image: url("${Img}");
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 1023px) {
    width: 2rem;
    height: 2rem;
    left: 3rem;
    bottom: 3rem;
  }

  @media screen and (max-width: 766px) {
    display: none;
  }
`

const Ele = () => {
  return (
    <Box
      target="_blank"
      rel="noreferrer"
      href="https://reachahand.org"
      title="Reach A Hand Uganda"
    />
  )
}

export default Ele
