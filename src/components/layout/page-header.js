import React from "react"
import styled from "styled-components"
import InView from "../shared/in-view"

const Box = styled.div`
  position: relative;
  text-align: center;

  h1 {
    color: #b98027;
    font-size: 5rem;
  }

  p {
    font-size: 1rem;
    width: 35%;
    margin: 0 auto;
    padding-top: 3rem;
    line-height: 1.9;
    padding-bottom: 6rem;
  }

  @media screen and (max-width: 766px) {
    p {
      width: 100%;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    h1 {
      font-size: 3.5rem;
    }
  }
`

const Wrap = styled.div`
  overflow: hidden;
`

const Ele = ({ title, caption }) => {
  return (
    <Box>
      <Wrap>
        <InView animation="fade-in">
          <h1 className="futura-pt">{title}</h1>
        </InView>
      </Wrap>
      <Wrap>
        <InView animation="fade-in">
          <p>{caption}</p>
        </InView>
      </Wrap>
    </Box>
  )
}
export default Ele
