import React from "react"
import styled from "styled-components"
import InView from "../shared/in-view"
import { GuildData } from "./data"

const Box = styled.section`
  position: relative;
  z-index: 2;
  width: 25%;
  margin: 0 auto;
  padding-top: 3vw;
  color: #000;
  text-align: center;
  overflow: hidden;

  span {
    display: block;
    padding-top: 4vw;
  }

  @media screen and (max-width: 1023px) {
    width: 45%;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    padding: 0 3rem;
  }
`

const Ele = () => {
  return (
    <Box>
      <InView animation="fade-in">
        <p>{GuildData().description.text}</p>
        <span className="futura-pt">Scroll Down</span>
      </InView>
    </Box>
  )
}
export default Ele
