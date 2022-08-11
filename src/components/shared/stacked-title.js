import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { moveUp } from "../shared/animations"
import { useInView } from "react-intersection-observer"

const Box = styled.div`
  .line-b {
    display: flex;
    position: relative;
    left: -3rem;
    top: -0.75rem;

    span {
      animation-delay: 0.3s;
    }
  }

  &.splash,
  &.guild {
    position: relative;
    z-index: 10;
    left: -1vw;

    .line-b {
      left: 2rem;
    }
  }

  &.guild {
    text-align: center;
  }

  &.nods {
    .line-b {
      left: 4rem;
    }
  }

  @media screen and (max-width: 766px) {
    .line-b {
      left: -2rem;
    }
  }
`

const Text = styled.span`
  font-size: 5rem;
  display: none;
  line-height: 1.2;
  color: #b98027;

  ${props =>
    props.top &&
    css`
      font-size: 1.875rem;
    `}

  ${props =>
    props.italic &&
    css`
      font-family: "Playfair Display";
      font-style: italic;
      font-size: 1.875rem;
      text-transform: lowercase;
      font-weight: 500;
      position: relative;
      top: 0.5rem;
      margin-right: 1rem;
      color: #b6b6b6;
    `}

    .is-visible & {
    display: block;
    animation: ${moveUp} 1.5s cubic-bezier(0.33, 1, 0.68, 1) both;
  }

  /* awards */
  .splash & {
    font-size: 3.75rem;

    ${props =>
      props.italic &&
      css`
        font-size: 1.25rem;
      `}

    ${props =>
      props.top &&
      css`
        font-size: 1.25rem;
        text-align: center;
      `}
  }

  .light & {
    color: #fff;
  }

  .cream & {
    color: #fff8ac;
  }

  @media screen and (max-width: 1023px) {
    font-size: 4.5rem;

    ${props =>
      props.italic &&
      css`
        font-size: 2rem;
      `}
  }

  @media screen and (max-width: 766px) {
    font-size: 2.5rem;
    line-height: 1.4;

    ${props =>
      props.italic &&
      css`
        font-size: 1rem;
      `}
  }
`

const Wrap = styled.span`
  overflow: hidden;
  display: block;
`

const Ele = ({ first, second, third, fourth, theme, type, size }) => {
  const [title, titleInView] = useInView()
  const [visible, setVisible] = useState("")

  useEffect(() => {
    if (titleInView) {
      setVisible("is-visible")
    }
  }, [titleInView])

  return (
    <Box
      ref={title}
      className={"c-stacked-title " + visible + " " + theme + " " + type}
    >
      <h1>
        <span className="line-a">
          <Wrap>
            {fourth && (
              <Text top className="futura-pt">
                {fourth}
              </Text>
            )}
            {first && <Text className="futura-pt">{first}</Text>}
          </Wrap>
        </span>
        {second && third && (
          <span className="line-b">
            <Wrap>
              <Text italic>{second}</Text>
            </Wrap>
            <Wrap>
              <Text className="futura-pt">{third}</Text>
            </Wrap>
          </span>
        )}
      </h1>
    </Box>
  )
}
export default Ele
