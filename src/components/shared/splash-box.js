import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../utilities/context"

const Box = styled.section`
  background-color: #100618;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &.brown {
    background-color: #0e0803;
  }

  &.green {
    background-color: #000b09;
  }

  &.column {
    flex-direction: column;
  }

  @media screen and (min-width: 767px) and (max-aspect-ratio: 4/3) {
    height: 75vw;
  }

  @media screen and (min-width: 767px) and (min-aspect-ratio: 2/1) {
    height: 70vw;
  }
`

export default ({ children, theme }) => {
  const [ele, eleInView] = useInView()
  const dispatch = useGlobalDispatchContext()
  const { active_section } = useGlobalStateContext()

  useEffect(() => {
    const showMenu = () => {
      dispatch({
        type: "SHOW_MENU",
        value: "show",
      })
    }

    if (window.innerWidth > 766) {
      if (active_section === "initiative" || active_section === "awards") {
        if (!eleInView) {
          dispatch({
            type: "SHOW_LOGO",
            value: "show",
          })

          showMenu()
        } else {
          dispatch({
            type: "SHOW_LOGO",
            value: "hide",
          })

          dispatch({
            type: "SHOW_MENU",
            value: "hide",
          })
        }
      } else {
        showMenu()
      }
    }
  }, [eleInView, active_section, dispatch])
  return (
    <Box className={theme} ref={ele}>
      {children}
    </Box>
  )
}
