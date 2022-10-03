import * as React from "react"
import styled from "styled-components"
import Pattern from "../../images/elements/round-pattern-a.svg"

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`

const Bkg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("${Pattern}");
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.04;
  transform: scale(1.3);
`

const Ele = () => {
  return (
    <Box>
      <Bkg />
    </Box>
  )
}
export default Ele
