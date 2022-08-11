import React from "react"
import styled, { keyframes } from "styled-components"
import Grain from "../../images/utility/noise.png"

const noise = keyframes`
    0% {
        transform:translate3d(0, 9rem, 0)
    }

    10% {
        transform:translate3d(-1rem, -4rem, 0)
    }

    20% {
        transform:translate3d(-8rem, 2rem, 0)
    }

    30% {
        transform:translate3d(9rem, -9rem, 0)
    }

    40% {
        transform:translate3d(-2rem, 7rem, 0)
    }

    50% {
        transform:translate3d(-9rem, -4rem, 0)
    }

    60% {
        transform:translate3d(2rem, 6rem, 0)
    }

    70% {
        transform:translate3d(7rem, -8rem, 0)
    }

    80% {
        transform:translate3d(-9rem, 1rem, 0)
    }

    90% {
        transform:translate3d(6rem, -5rem, 0)
    }

    to {
        transform:translate3d(-7rem, 0, 0)
    }
`
const Box = styled.div`
  position: fixed;
  top: -10rem;
  left: -10rem;
  width: calc(100vw + 20rem);
  height: calc(100vh + 20rem);
  animation: ${noise} 1s steps(2) infinite;
  background-image: url(${Grain});
  z-index: 10001;
  background-repeat: repeat;
  pointer-events: none;
  will-change: transform;
`

export default () => <Box />
