import React from "react"
import styled from "styled-components"

const Box = styled.section`
  padding-top: 8.991vw;
  min-height: 50vw;
  position: relative;
  overflow: hidden;

  .o-glimmer {
    opacity: 0.4;
    top: -30vw;
    left: calc(50% - 26vw);
    transform: scale(1.5);
  }

  @media screen and (max-width: 766px) {
    padding-top: 6rem;
  }
`

const Ele = ({ children, id }) => {
  return <Box id={id}>{children}</Box>
}
export default Ele
