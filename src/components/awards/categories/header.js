import React from "react"
import styled from "styled-components"
import InView from "../../shared/in-view"
import { AwardsPageData } from "../data"

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
  }

  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 4.5rem;
    }

    p {
      width: 60%;
    }
  }

  @media screen and (max-width: 766px) {
    h1 {
      font-size: 3rem;
    }

    p {
      width: 100%;
      padding: 3rem;
    }
  }
`

const Wrap = styled.div`
  overflow: hidden;
`

const Ele = () => {
  return (
    <Box>
      <Wrap>
        <InView animation="fade-in">
          <h1 className="futura-pt">Categories</h1>
        </InView>
      </Wrap>
      <Wrap>
        <InView animation="fade-in">
          <p>{AwardsPageData().categories_description.text}</p>
        </InView>
      </Wrap>
    </Box>
  )
}
export default Ele
