import React from "react"
import styled from "styled-components"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../utilities/context"

const Box = styled.button`
  position: fixed;
  height: 2.5rem;
  width: 2.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  top: 3rem;
  right: 3rem;

  > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: solid 2px #c8a883;
      transform: rotateZ(45deg);
    }
  }

  span {
    width: 50%;
    height: 2px;
    background: #c8a883;
    display: block;
    transition: transform 0.5s ease;
    margin-bottom: 0.4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.is-open {
    span {
      position: absolute;

      &:nth-child(1) {
        transform: rotateZ(45deg);
      }

      &:nth-child(2) {
        transform: rotateZ(-45deg);
      }

      &:last-child {
        display: none;
      }
    }
  }

  @media screen and (max-width: 766px) {
    display: flex;

    span {
      width: 35%;
      margin-bottom: 3px;
    }
  }
`

const Ele = () => {
  const dispatch = useGlobalDispatchContext()
  const { show_menu } = useGlobalStateContext()

  const toggleMenu = () => {
    if (show_menu === "hide") {
      dispatch({
        type: "SHOW_MENU",
        value: "show",
      })
    }

    if (show_menu === "show") {
      dispatch({
        type: "SHOW_MENU",
        value: "hide",
      })
    }
  }

  return (
    <Box
      className={show_menu === "show" ? "is-open" : ""}
      onClick={() => {
        toggleMenu()
      }}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Box>
  )
}
export default Ele
