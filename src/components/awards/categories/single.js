import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Button from "../../shared/inline-button"
import InView from "../../shared/in-view"
import Video from "../../shared/video"
import Embed from "../../shared/embed"

import { moveUp, slideUp } from "../../shared/animations"
// import ArrowLeft from "../../../images/elements/arrow.svg"
// import ArrowRight from "../../../images/elements/arrow-right.svg"
import { useInView } from "react-intersection-observer"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../../utilities/context"

const Box = styled.div`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  display: none;
  will-change: transform;

  &.show {
    display: block;
  }

  .c-video-box {
    filter: grayscale(100%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.15;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .page-has-loaded & {
    &.show {
      animation: ${moveUp} 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  }

  @media screen and (max-width: 766px) {
    overflow: scroll;

    .c-video-box {
      opacity: 0.25;
    }
  }
`

const Hero = styled.figure`
  width: 37.281vw;
  height: 45.95vw;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;

  .o-inview {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    height: 120vw;
    position: static;
  }
`

const Copy = styled.section`
  position: absolute;
  right: 14vw;
  bottom: 7vw;
  padding-top: 0;
  padding-left: 0;
  width: 32.529vw;
  z-index: 2;

  .cta-box {
    > div {
      margin: 0 0.25rem;
      display: inline-block;
    }
  }

  h2 {
    font-size: 1.875rem;
    line-height: 1;
    color: #b98027;
  }

  h2,
  p {
    padding-bottom: 3.5vw;
  }

  p {
    line-height: 2;
  }

  @media screen and (max-width: 1023px) {
    right: 15vw;
    width: 40vw;
  }

  @media screen and (max-width: 766px) {
    display: block;
    position: static;
    padding: 3rem;
    width: 100%;
    padding-top: 6rem;
    padding-bottom: 5rem;
  }
`

const Close = styled.button`
  position: absolute;
  top: 5.702vw;
  right: 7.018vw;
  height: 2.632vw;
  width: 2.632vw;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    span {
      transform: none;

      &:last-child {
        transform: none;
      }
    }
  }

  span {
    height: 2px;
    width: 100%;
    background-color: #5ec1a5;
    display: block;
    transform: rotateZ(45deg);
    will-change: transform;
    transition: transform 0.3s;
    position: absolute;

    &:last-child {
      transform: rotateZ(-45deg);
    }
  }

  @media screen and (max-width: 1023px) {
    left: auto;
    right: 25%;
  }

  @media screen and (max-width: 766px) {
    top: 3rem;
    left: 3rem;
    right: auto;
    width: 3rem;
    height: 3rem;
  }
`

// const Nav = styled.div`
//     position: absolute;
//     top: 5.15vw;
//     right: 14vw;
//     display: flex;
//     align-items: center;
//     z-index: 3;

//     button {
//         height: 4rem;
//         width: 4rem;
//         background-repeat: no-repeat;
//         background-size: 75%;
//         background-position: center;
//         background-image: url('${ArrowLeft}');
//         transition: opacity 0.5s, transform 0.5s;
//         position: relative;
//         display: flex;
//         align-items: center;
//         justify-content:center;
//         will-change: transform;
//         opacity: 0.5;

//         &:after{
//             content: "";
//             position: absolute;
//             width: 90%;
//             height: 90%;
//             border: solid 1px #B98027;
//             transform: rotateZ(45deg) scale3d(0,0,0);
//             opacity: 0;
//             will-change: transform;
//             transition: transform 0.5s, opacity 0.5s;
//         }

//         &.right {
//             background-image: url('${ArrowRight}');
//         }

//         &:hover{
//             transform: scale3d(1.2,1.2,1.2);
//             opacity: 1;

//             &:after{
//                 opacity: 1;
//                 transform: rotateZ(-45deg) scale3d(1,1,1);
//             }
//         }

//         span {
//             display: none;
//         }
//     }

//     span {
//         display: block;
//         margin: 0 0.5rem;
//         font-size: 0.875rem;
//     }
//     em {
//         font-family: 'Playfair Display';
//         font-style: italic;
//     }
// `

const Transition = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  z-index: 4;
  will-change: transform;

  &:after {
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    transform-origin: 0 0;
    position: absolute;
    will-change: transform;
    transform: scale3d(1, 1, 1);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    content: "";
  }

  &.show {
    display: block;
    animation: ${slideUp} 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  &.hide {
    display: block;
    &:after {
      transform: scale3d(1, 0, 1);
    }
  }
`

const EmbedWrap = styled.div`
  padding: 4.5rem 0;
`

const Ele = () => {
  const { selected_award } = useGlobalStateContext()
  const [category, setCategory] = useState(null)
  const dispatch = useGlobalDispatchContext()

  const [wipe, setWipe] = useState()
  const [wrap, wrapInView] = useInView()
  const wipeBox = useRef()
  const closeBtn = useRef()

  const clearSelectedAward = () => {
    setCategory()
    dispatch({
      type: "SET_SELECTED_AWARD",
      value: null,
    })
  }

  useEffect(() => {
    if (selected_award != null) {
      setCategory(selected_award)
    }
  }, [selected_award])

  useEffect(() => {
    wipeBox.current.addEventListener("animationend", () => {
      setWipe("hide")
      setTimeout(() => {
        setWipe("")
      }, 1000)
    })
  }, [])

  useEffect(() => {
    let body = document.getElementsByTagName("body")[0]
    if (wrapInView) {
      body.style.overflow = "hidden"
    }

    closeBtn.current.addEventListener("click", () => {
      body.style.overflow = "visible"
    })
  }, [wrapInView])

  return (
    <Box ref={wrap} className={selected_award != null ? "show" : "hide"}>
      <Transition ref={wipeBox} className={wipe} />
      {/* <Nav>
        <button
          onClick={() => {
            goBack()
          }}
        >
          <span>left</span>
        </button>
        <span>
          1 <em>of</em> 12
        </span>
        <button
          className="right"
          onClick={() => {
            goNext()
          }}
        >
          <span>right</span>
        </button>
      </Nav> */}
      <Hero>
        <InView className="fade-in-left" delay="20">
          <img src={category ? category.image : ""} alt="" />
        </InView>
      </Hero>
      <Copy>
        <InView className="fade-in-left" delay="20">
          <h2 className="futura-pt">{category ? category.title : ""}</h2>
          <p>{category ? category.description : ""}</p>
          <div className="cta-box">
            <Button
              type="box"
              to="https://docs.google.com/forms/d/1zL1xqDuUNqL95-CeO4uS0Upx9iDxRHo-f8aa0Mor_Aw/prefill"
              method="external-link"
              label="Submit Nomination"
            />
            <Button
              type="box"
              to="https://drive.google.com/file/d/1KGvd4FWHIqbRSkhh2otEiRd0QCtMi2F8/view"
              method="external-link"
              label="Download Form"
            />
          </div>
          {category && category.explainer !== null && (
            <EmbedWrap>
              <Embed url={category.explainer} />
            </EmbedWrap>
          )}
        </InView>
      </Copy>
      <Close
        ref={closeBtn}
        onClick={() => {
          clearSelectedAward()
        }}
      >
        <span></span>
        <span></span>
      </Close>
      <Video src={category && category.loop ? category.loop : ""} />
    </Box>
  )
}
export default Ele
