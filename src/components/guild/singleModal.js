import * as React from "react"
import styled, { keyframes } from "styled-components"
import Flex from "../shared/flex"
import PatternBlock from "../shared/pattern-block"
import StackedTitle from "../shared/stacked-title"
import InView from "../shared/in-view"

const slideOut = keyframes`
  0%{
    transform: scale3d(1,1,1);
  }

  100%{
    transform: scale3d(0,1,1);
  }
`

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;

  .o-pattern-block {
    top: 0;
    position: absolute;
    right: 0;
    z-index: 100;
    opacity: 0.25;
  }

  > div {
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 90%;
  }

  @media (max-width: 900px) {
    .o-flex-box {
      align-items: flex-start;
      padding-top: 2rem;
      margin-bottom: 2rem;
      overflow: scroll;
    }
  }
`

const Inner = styled.div`
  background-color: #031510;
  width: 85%;
  height: 80vh;
  z-index: 1;
  position: relative;
  display: flex;

  @media (max-width: 1200px) {
    width: 90%;
    height: 90vh;
  }

  @media (max-width: 900px) {
    display: block;
    height: auto;
  }
`

const HeroBox = styled.figure`
  width: 50%;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: orange;

  @media (max-width: 900px) {
    width: 100%;
    height: 48vh;
  }

  @media (max-width: 766px) {
    height: 30vh;
  }
`

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #fff;
    transform-origin: 100% 0;
    animation: ${slideOut} 0.75s cubic-bezier(0.83, 0, 0.17, 1) both;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Content = styled.section`
  padding: 3rem;
  overflow: scroll;
  font-size: 0.9375rem;

  p {
    padding-bottom: 1.5rem;
    line-height: 1.7;
  }

  .subtitle,
  .byline {
    display: block;
  }

  .subtitle {
    color: #fff;
    font-family: "Playfair Display";
    font-style: italic;
    display: block;
    padding-bottom: 3rem;
  }

  .byline {
    font-style: italic;
  }

  ul,
  ol {
    width: 90%;
    margin: 0 auto;

    li {
      padding: 0.25rem 0;
    }
  }

  ul {
    list-style: disc inside;
  }

  @media (max-width: 766px) {
    padding: 2rem;
  }
`

const CloseBtn = styled.button`
  height: 3.5rem;
  width: 3.5rem;
  background-color: #b98027;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  svg {
    stroke: #fff;
  }
`

const Ele = ({ onClose, member }) => {
  return (
    <Box>
      <Flex middle center className="o-flex-box">
        <Inner>
          <PatternBlock type="envy" />
          <HeroBox>
            <CloseBtn onClick={() => onClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6L18 18"></path>
              </svg>
            </CloseBtn>
            <ImageBox>
              {member.photo.fluid && (
                <img src={member.photo.fluid.src} alt="" />
              )}
            </ImageBox>
          </HeroBox>
          <Content>
            <InView animation="fade-in">
              <div className="o-rich-member">
                {member.name.text && (
                  <StackedTitle first={member.name.text}></StackedTitle>
                )}
                {member.title.text && (
                  <span className="subtitle">{member.title.text}</span>
                )}
                {member.bio.html && (
                  <div
                    dangerouslySetInnerHTML={{ __html: member.bio.html }}
                  ></div>
                )}
              </div>
            </InView>
          </Content>
        </Inner>
      </Flex>
    </Box>
  )
}
export default Ele
