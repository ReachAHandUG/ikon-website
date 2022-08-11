import React from "react"
import styled from "styled-components"
import InView from "./in-view"
import Icon from "./icon"

const Box = styled.article`
  position: relative;
  padding-bottom: 2.5rem;
  z-index: 1;
`

const Photo = styled.div`
  position: absolute;
  width: 8vw;
  height: 8vw;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    border: solid 1px #5ec1a5;
    transform: rotateZ(45deg) scale(0.75);
    width: 100%;
    height: 100%;
    left: -1rem;
    top: 0;
    z-index: 2;
  }

  figure {
    width: 100%;
    height: 100%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    position: relative;
    z-index: 4;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 766px) {
    display: none;
  }
`

const Meta = styled.ul`
  li {
    display: inline-block;
  }

  a,
  button {
    font-size: 0.875rem;
    color: inherit;
    margin-right: 2.25rem;
    display: inline-flex;
    align-items: center;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.5rem;
    fill: #b98027;
  }
`

const Time = styled.time`
  display: flex;
  width: 30%;

  .day {
    font-size: 3.75rem;
    color: #5ec1a5;
    position: relative;
    display: block;
    line-height: 1;

    &:after {
      content: "";
      position: absolute;
      bottom: 1rem;
      transform: rotateZ(-45deg);
      background-color: #fff;
      height: 2px;
      width: 70%;
      right: -45%;
    }
  }

  .month-year {
    font-size: 1.125rem;
    position: relative;
    left: 1rem;
    top: 2rem;
    span {
      display: block;
    }
  }
`

const Title = styled.div`
  width: 70%;
  h2 {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    color: #fff8ac;
  }
`

const Info = styled.div`
  width: calc(100% - 9.25vw);
  display: flex;
  align-items: center;
  position: relative;
  padding: 2.289vw 0;
  left: 9.25vw;

  @media screen and (max-width: 766px) {
    left: 0;
    width: 100%;
  }
`

const Line = styled.span`
  height: 2px;
  background: #b98027;
  width: 100%;
  transform-origin: 0 0;
  transform: scale3d(0, 1, 1);
  will-change: transform;
  transition: transform 1.25s cubic-bezier(0.65, 0, 0.35, 1);
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  opacity: 0.75;

  .is-visible & {
    transform: none;
  }
`

const Ele = ({ venue, title, date, image }) => {
  return (
    <Box>
      <InView animation="fade-in">
        <Photo>
          <figure>
            <img src={image} alt="" />
          </figure>
        </Photo>

        <Info>
          <Title>
            <h2 className="futura-pt">{title}</h2>
            <Meta>
              <li>
                <a
                  href="https://maps.google.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon title="pin" />
                  <span>{venue}</span>
                </a>
              </li>
              {/* <li>
                                <button>
                                    <span>Watch Trailer</span>
                                    <Icon title="facebook" />
                                </button>
                            </li> */}
            </Meta>
          </Title>
          <Time className="futura-pt">
            <span className="day">{date.substring(4, 6)}</span>
            <div className="month-year">
              <span>{date.substring(0, 3)}</span>
              <span>{date.substring(7, 11)}</span>
            </div>
          </Time>
          <Line />
        </Info>
      </InView>
    </Box>
  )
}
export default Ele
