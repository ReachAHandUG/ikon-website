import React from "react"
import styled from "styled-components"

const Box = styled.section`
  position: relative;
  overflow: hidden;

  .o-pattern-block {
    top: 25vw;
    right: 0;
    position: absolute;
  }

  .o-side-pattern {
    top: 9.737vw;
    left: 0;
  }

  .o-nods-contentbox {
    padding-top: 19.737vw;
    position: relative;
    padding-bottom: 12vw;
  }

  .o-glimmer {
    top: -5vw;
    left: -30vw;
    opacity: 0.5;
  }

  .cta {
    text-align: center;
    > div {
      margin: 0 0.25rem;
      display: inline-block;
    }
  }

  @media screen and (max-width: 766px) {
    .o-nods-contentbox {
      padding: 17rem 3rem 12rem;
    }
  }
`

const Ele = ({ children }) => {
  return <Box id="sec-nods">{children}</Box>
}
export default Ele
