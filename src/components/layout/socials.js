import React from "react"
import styled from "styled-components"
import Icon from "../shared/icon"

const Box = styled.div`
  position: fixed;
  z-index: 10;
  right: 2.778vw;
  bottom: 3.874vw;

  a {
    display: inline-flex;
    margin-left: 2rem;
    height: 1vw;
    width: 1vw;
    position: relative;
    top: 3px;
    align-items: center;
    justify-content: center;

    &:after {
      content: "";
      width: 200%;
      height: 200%;
      border: solid 1px #fff8ac;
      transform: rotateZ(0) scale3d(0.2, 0.2, 0.2);
      position: absolute;
      transition: transform 0.3s ease;
      opacity: 0.5;
    }

    &:hover {
      &:after {
        transform: scale3d(1.5, 1.5, 1.5) rotateZ(45deg);
      }

      &.fb svg {
        fill: #5ec1a5;
      }

      &.ig svg {
        fill: #ec423c;
      }

      &.tw svg {
        fill: #4e99f2;
      }
    }

    &.tw {
      svg {
        transform: scale(1.1);
        position: relative;
        top: 1px;
      }
    }

    &.fb {
      svg {
        transform: scale(0.95);
      }
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: #fff8ac;
    transition: fill 0.3s;
  }

  @media screen and (max-width: 1023px) {
    bottom: 3rem;
    right: 3rem;

    a {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 766px) {
    display: none;
  }
`

const Ele = () => {
  return (
    <Box>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://facebook.com/afrikaikons"
        className="fb"
      >
        <Icon title="facebook" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/AfrikaIkons"
        className="tw"
      >
        <Icon title="twitter" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/afrikaikons/"
        className="ig"
      >
        <Icon title="ig" />
      </a>
    </Box>
  )
}

export default Ele
