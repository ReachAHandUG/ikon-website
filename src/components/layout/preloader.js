import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { slideDown, rotate } from "../shared/animations"
import Icon from "../shared/icon"

const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  z-index: 1000;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 4rem;
    height: 4rem;
    animation: ${rotate} 1s linear both infinite;
  }
  .page-has-loaded & {
    animation: ${slideDown} 1s cubic-bezier(0.65, 0, 0.35, 1) both 0.5s;
  }

  @media screen and (max-width: 766px) {
    svg {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`

const Ele = () => {
  const wrap = useRef()
  useEffect(() => {
    wrap.current.addEventListener("animationend", () => {
      let body = document.getElementsByTagName("body")[0]
      setTimeout(() => {
        wrap.current.style.display = "none"
        body.classList.add("clear-splash-delays")
      }, 2000)
    })
  }, [])
  return (
    <Box ref={wrap}>
      <Icon title="ikon"></Icon>
    </Box>
  )
}
export default Ele
