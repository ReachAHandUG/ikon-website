import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Item = styled.div`
  a,
  button {
    display: inline-block;
  }
`

const Box = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 1rem 0;
  padding-right: 2rem;
  z-index: 1;

  &.box {
    padding: 1.25rem 2.5rem;
    border: solid 1px #b98027;
  }

  &:hover {
    .label {
      transform: translate3d(120%, 0, 0);
    }

    .arrow {
      transform: translate3d(-1rem, 0, 0);
      &:after {
        transform: scale3d(1.6, 1.6, 1.6) rotateZ(-45deg);
        background-color: #b98027;
      }
    }
  }
`

const Arrow = styled.div`
  height: 1px;
  width: 1.5rem;
  position: relative;
  background: #b98027;
  display: inline-block;
  left: 1rem;
  transition: transform 0.6s ease;

  &:after {
    content: "";
    position: absolute;
    right: -0.8rem;
    top: -0.25rem;
    height: 0.625rem;
    width: 0.625rem;
    transform: rotateZ(45deg);
    border: solid 1px #b98027;
    transition: transform 0.4s;
  }
`

const Wrap = styled.div`
  font-size: 1rem;
  color: #fff;
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: transform 0.6s ease;
`

const Label = styled.span`
  transition: transform 0.6s ease;
  display: block;
  color: #fff8ac;
  will-change: transform;

  span {
    position: absolute;
    left: -120%;
    top: 0;
    z-index: 0;
  }

  .envy & {
    color: #5ec1a5;
  }
`

const Ele = ({ label, fill, type, to, method }) => {
  return (
    <Item>
      {method === "submit" && (
        <button type="submit">
          <Box className={fill + " " + type}>
            <Wrap className="futura-pt">
              <Label className="label">
                {label} <span>{label}</span>
              </Label>
            </Wrap>
            <Arrow className="arrow" />
          </Box>
        </button>
      )}

      {method === "link" && (
        <Link to={to}>
          <Box className={fill + " " + type}>
            <Wrap className="futura-pt">
              <Label className="label">
                {label} <span>{label}</span>
              </Label>
            </Wrap>
            <Arrow className="arrow" />
          </Box>
        </Link>
      )}

      {method === "external-link" && (
        <a href={to} target="_blank">
          <Box className={fill + " " + type}>
            <Wrap className="futura-pt">
              <Label className="label">
                {label} <span>{label}</span>
              </Label>
            </Wrap>
            <Arrow className="arrow" />
          </Box>
        </a>
      )}
    </Item>
  )
}
export default Ele
