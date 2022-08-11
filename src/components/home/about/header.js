import React from "react"
import styled from "styled-components"
import InView from "../../shared/in-view"
import Pattern from "../../shared/pattern-block"
import { moveUp } from "../../shared/animations"
import StackedTitle from "../../shared/stacked-title"
import { AboutData } from "./about-data"

const Header = styled.section`
  position: relative;
  padding-top: 11.471vw;
  z-index: 1;

  .o-pattern-block {
    position: absolute;
    right: 0;
    top: 12.471vw;
  }

  @media screen and (max-width: 766px) {
    padding-top: 6rem;
  }
`

const Caption = styled.div`
  width: 70%;
  text-align: center;
  margin: 0 auto;
  padding-top: 5.795vw;
  overflow: visible;

  .is-visible {
    p {
      display: block;
      animation: ${moveUp} 1.65s cubic-bezier(0.33, 1, 0.68, 1) both;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.75;
    display: none;
  }

  @media screen and (max-width: 1023px) {
    width: 85%;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    padding-top: 4rem;

    p {
      font-size: 1rem;
    }
  }
`

const Ele = () => {
  return (
    <>
      <Header>
        <StackedTitle first="prestige" second="meets" third="recognition" />
        <Caption>
          <InView animation="hidden">
            <p>{AboutData().description.text}</p>
          </InView>
        </Caption>
        <Pattern />
      </Header>
    </>
  )
}
export default Ele
