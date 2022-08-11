import React from "react"
import styled from "styled-components"

const Box = styled.div`
  margin: 0 19.006vw 0;
  position: relative;

  &.large {
    margin: 0 12.006vw 0;
  }

  @media screen and (max-width: 1023px) {
    width: 75%;
    margin: 0 auto;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    margin: 0;
    padding: 0 3rem;
  }
`

const Ele = ({ children, width }) => {
  return <Box className={width}>{children}</Box>
}
export default Ele
