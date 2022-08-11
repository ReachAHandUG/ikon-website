import React from "react"
import styled from "styled-components"

const Box = styled.div`
  background: radial-gradient(35% 35% at 50% 50%, #ff9c03, rgba(0, 0, 0, 0));
  opacity: 0.75;
  position: absolute;
  width: 55vw;
  height: 55vw;
  z-index: 0;

  &.envy {
    background: radial-gradient(
      35% 35% at 50% 50%,
      #02efac 0%,
      rgba(2, 91, 66, 0) 100%
    );
  }

  &.passion {
    background: radial-gradient(
      35% 35% at 50% 50%,
      #ff0000 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &.top {
    opacity: 0.85;
    top: -40vw;
    width: 75vw;
    height: 75vw;
  }

  &.bottom {
    bottom: -45vw;
    width: 120vw;
    height: 100vw;
    opacity: 0.4;
  }
`

const Ele = ({ className }) => {
  return <Box className={"o-glimmer " + className} />
}
export default Ele
