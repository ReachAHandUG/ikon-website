import React from "react"
import styled from "styled-components"

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 766px) {
    transform: scale(1.2);
  }
`

const Ele = ({ children }) => {
  return <Box>{children}</Box>
}
export default Ele
