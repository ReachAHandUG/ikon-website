import React from "react"
import styled from "styled-components"

const Box = styled.section`
  position: relative;
  overflow: hidden;

  .o-pattern-block {
    top: 12vw;
    right: 0;
    position: absolute;
  }

  .o-side-pattern {
    top: 4vw;
    right: 0;
    transform: scale3d(-1, 1, 1);
  }

  .o-accolade-contentbox {
    padding-top: 10.737vw;
    position: relative;
    padding-bottom: 7vw;
  }

  .o-glimmer {
    top: 0;
    right: -30vw;
    opacity: 0.5;
  }
`

const Ele = ({ children }) => {
  return <Box id="sec-accolade">{children}</Box>
}
export default Ele
