import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Box = styled.div`
  display: block;
  position: relative;
  will-change: transform;

  &.hidden {
    overflow: hidden;
  }

  &.fade-in,
  &.fade-in-left {
    transition-delay: 0.2s;
    opacity: 0;
    transition: transform 1s, opacity 1s;
    &.is-visible {
      opacity: 1;
      transform: none;
    }
  }

  &.fade-in {
    transform: translate3d(0, 5rem, 0);
  }

  &.fade-in-left {
    transform: translate3d(5rem, 0, 0);
  }
`

const Ele = ({ children, animation, delay }) => {
  const [obj, objInView] = useInView()
  const [visible, setVisible] = useState("")
  let style = {
    transitionDelay: delay ? delay / 50 + "s" : "",
  }

  useEffect(() => {
    if (objInView) {
      setVisible("is-visible")
    }
  }, [objInView])

  return (
    <Box
      ref={obj}
      style={style}
      className={"o-inview " + visible + " " + animation}
    >
      {children}
    </Box>
  )
}

export default Ele
