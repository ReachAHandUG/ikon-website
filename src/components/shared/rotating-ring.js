import React from "react"
import styled, { keyframes } from "styled-components"
import ikon from "../../images/elements/ikon-text-ring.svg"
import patternA from "../../images/elements/round-pattern-a.svg"
import patternB from "../../images/elements/round-pattern-b.svg"
import patternC from "../../images/elements/round-pattern-c.svg"
import patternD from "../../images/elements/round-pattern-d.svg"
import ikonAwards from "../../images/elements/awards-text-ring.svg"
import ikonGuild from "../../images/elements/guild-text-ring.svg"
import ikonTribe from "../../images/elements/tribe-text-ring.svg"
import { useInView } from "react-intersection-observer"

const rotate = keyframes`
    0%{
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
`

const rotateReverse = keyframes`
    0%{
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(-360deg);
    }
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  animation-name: ${rotate};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: both;
  animation-duration: 100s;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  &.is-paused {
    animation-play-state: paused;
  }

  &.no-animation {
    animation: none;
  }

  &.square {
    animation-name: ${rotateReverse};

    span {
      &:after {
        border-color: #b98027;
      }
    }
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  span {
    position: relative;
    display: block;
    width: 100vw;
    height: 100vw;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: solid 2px #b98027;
      transform: rotateZ(45deg);
    }

    &.mint {
      &:after {
        border-color: #5ec1a5;
      }
    }
  }
`

export default ({ type, scale, speed, opacity, fill, theme }) => {
  const [obj, objInView] = useInView()

  const styles = {
    opacity: opacity,
    transform: "scale3d(" + scale + "," + scale + "," + scale + ")",
    borderColor: fill ? fill : "red",
  }

  let ringImg = ""

  switch (type) {
    case "ikon":
      ringImg = ikon
      break

    case "ikon-awards":
      ringImg = ikonAwards
      break

    case "ikon-guild":
      ringImg = ikonGuild
      break

    case "ikon-tribe":
      ringImg = ikonTribe
      break

    case "pattern-a":
      ringImg = patternA
      break

    case "pattern-b":
      ringImg = patternB
      break

    case "pattern-c":
      ringImg = patternC
      break

    case "pattern-d":
      ringImg = patternD
      break

    default:
      break
  }

  return (
    <Box
      ref={obj}
      className={type + " " + objInView ? "" : "is-paused"}
      style={{ animationDuration: speed + "s" }}
    >
      {type === "square" && <span className={theme} style={styles}></span>}

      {type !== "square" && <img src={ringImg} style={styles} alt="" />}
    </Box>
  )
}
