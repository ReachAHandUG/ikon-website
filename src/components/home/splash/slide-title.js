import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import patternA from "../../../images/elements/pattern-unit-a.svg"
import patternB from "../../../images/elements/pattern-unit-b.svg"
import patternC from "../../../images/elements/pattern-unit-c.svg"
import { Link } from "gatsby"
import { moveUp, rotate, scaleOut } from "../../shared/animations"

const Box = styled.div`
  position: relative;
  line-height: 1;
  margin-bottom: 2.25rem;
  display: block;
  text-align: left;
  transition: transform 0.75s cubic-bezier(0.33, 1, 0.68, 1);

  > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &.is-active {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  &:first-child {
    margin-top: 2rem;
  }
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 766px) {
    &:first-child {
      margin-top: 5rem;
    }
  }
`

const Pattern = styled.div`
  height: 0.875rem;
  width: 0.875rem;
  position: absolute;
  top: 50%;
  left: -2rem;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;

    .educate & {
      background-image: url("${patternA}");
    }

    .connect & {
      background-image: url("${patternB}");
    }

    .award & {
      background-image: url("${patternC}");
    }
  }

  .is-active & {
    &:after {
      animation: ${rotate} 1s linear both infinite;
    }
  }

  ${props =>
    props.right &&
    css`
      right: -2rem;
      left: auto;
    `}

  .page-has-loaded & {
    animation: ${moveUp} 1.5s ease both;
  }
`

const Text = styled.div`
  overflow: hidden;
  font-size: 4.5rem;
  display: block;
  padding-bottom: 0.35rem;
  font-weight: 600;
  letter-spacing: -0.75px;
  will-change: transform;

  span {
    display: block;
    color: #fff;
    transition: color 0.4s;
    letter-spacing: 1px;
    transition: transform 0.75s, color 0.5s;
  }

  .is-active & {
    span {
      color: #b98027;
    }
  }

  &:hover {
    span {
      color: #b98027;
    }
  }

  .page-has-loaded & {
    span {
      animation: ${moveUp} 1s ease both;
    }
  }

  @media screen and (max-width: 766px) {
    font-size: 3.25rem;
  }
`

const Line = styled.span`
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #fff;
  bottom: 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    border: solid 1px #fff;
    top: -3px;
    transform: rotateZ(45deg);
    left: -0.5rem;
  }

  &:after {
    right: -0.5rem;
    left: auto;
  }

  .is-active & {
    background-color: #c8a883;

    &:before,
    &:after {
      border-color: #c8a883;
    }
  }

  .page-has-loaded & {
    animation: ${scaleOut} 1.5s ease both;
  }
`

const Ele = ({ label, index, className, to }) => {
  const [delay, setDelay] = useState(1)

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0]
    if (body.classList.contains("clear-splash-delays")) {
      setDelay(0.2)
    }
  }, [])

  return (
    <Box className={label + " " + className}>
      <Link to={to}>
        <Text>
          <span
            className="futura-pt"
            style={{ animationDelay: 0.1 * index * delay + 0.5 + "s" }}
          >
            {label}
          </span>
        </Text>
        <Pattern style={{ animationDelay: 0.1 * index * delay + 0.5 + "s" }} />
        <Pattern
          right
          style={{ animationDelay: 0.1 * index * delay + 0.5 + "s" }}
        />
        <Line style={{ animationDelay: 0.1 * index * delay + "s" }} />
      </Link>
    </Box>
  )
}

export default Ele
