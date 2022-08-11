import React from "react"
import styled from "styled-components"
import Icon from "./icon"
import triangle from "../../images/elements/triangle.svg"
import circle from "../../images/elements/circle.svg"
import inverted from "../../images/elements/triangle-inverted.svg"
import InView from "./in-view"
import Placeholder from "../../images/content/placeholder.jpg"

const Box = styled.article`
  position: relative;

  p {
    padding-bottom: 2rem;
    position: relative;
    z-index: 2;
    line-height: 2;
    font-size: 0.875rem;
  }

  .time {
    font-size: 0.75rem;
  }

  figure {
    height: 16vw;
    margin-bottom: 3vw;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`

const Shape = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0; 
    top: 0; 
    display: flex;
    align-items: center;
    justify-content:center;
    z-index: 0;

    &:after{
        width: 65%;
        height: 65%;
        background-repeat: no-repeat; 
        background-size: contain; 
        background-position: center; 
        content: ""; 
        opacity: 0.6; 
    }

    &.triangle:after{
        background-image: url('${triangle}');
    }

    &.circle:after{
        background-image: url('${circle}');
    }

    &.inverted:after{
        background-image: url('${inverted}');
    }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  position: relative;
  z-index: 2;

  a,
  span {
    display: block;
    font-size: 0.875rem;
    opacity: 0.75;
  }

  svg {
    width: 1.575rem;
    height: 1.575rem;
    fill: #b98027;
  }

  a {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      background: #b98027;
      transform-origin: 0 0;
      transform: scale3d(0, 1, 1);
      will-change: transform;
      transition: transform 0.3s;
      left: 0;
      bottom: -0.5rem;
    }

    &:hover {
      color: #fff8ac;
      &:after {
        transform: none;
      }
    }
  }
`
const Ele = ({ src }) => {
  let shapes = ["triangle", "circle", "inverted"]
  let index = Math.floor(Math.random() * shapes.length)
  let className = shapes[index]

  return (
    <Box>
      <InView animation="fade-in">
        <Header>
          <div>
            <Icon title="twitter" />
            <a href="https://twitter.com" rel="noreferrer" target="_blank">
              @ikon_ug
            </a>
          </div>
          <span className="time">1 day ago</span>
        </Header>
        {src && (
          <figure>
            <img src={Placeholder} alt="" />
          </figure>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
          porta augue. Maecenas imperdiet semper orci. #funLife #goIKONs
          #excellence
        </p>
        <Shape className={className} />
      </InView>
    </Box>
  )
}
export default Ele
