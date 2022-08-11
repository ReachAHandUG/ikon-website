import React from "react"
import styled from "styled-components"

const Box = styled.div`
  border: solid 2px #5ec1a5;
  opacity: 1;
  width: 100vw;
  height: 100vw;
  border-radius: 100%;
  position: absolute;
  transform: scale3d(0.9, 0.9, 0.9);
  opacity: 1;
  position: absolute;
`

export default ({ opacity, scale, fill }) => {
  const styles = {
    opacity: opacity,
    transform: "scale3d(" + scale + "," + scale + "," + scale + ")",
    borderColor: fill,
  }

  return <Box style={styles} />
}
