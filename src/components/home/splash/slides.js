import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Title from "./slide-title"
import Video from "../../shared/video"
import { moveUp } from "../../shared/animations"
import { SlidesData } from "./slides-data"

const Box = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
`

const CtaBtn = styled.div`
  margin-top: 2rem;
  a {
    display: inline-block;
    background-color: #b88028;
    padding: 1rem 2rem !important;
    border-radius: 10rem;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
  }
`

const Nav = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Videos = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

  .c-video-box {
    width: 100%;
    height: 100%;
    opacity: 0.25;
    display: none;

    &.is-active {
      display: block;
    }
  }
`

const Caption = styled.div`
  width: 30%;
  margin: 0 auto;
  text-align: center;
  padding-top: 2.5rem;
  font-size: 0.875rem;
  line-height: 2;
  overflow: hidden;
  display: none;

  .page-has-loaded & {
    display: block;
    > div {
      animation: ${moveUp} 2.5s cubic-bezier(0.22, 1, 0.36, 1) both 1s;
    }
  }

  .clear-splash-delays & {
    > div {
      animation-delay: 0.5s;
    }
  }

  a {
    display: inline-block;
    padding-top: 3rem;
    font-size: 0.8125rem;
    position: relative;

    &:after {
      width: 100%;
      height: 1px;
      bottom: -0.5rem;
      left: 0;
      background: #ec423c;
      transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
      transform: scale3d(0, 1, 1);
      will-change: transform;
      content: "";
      position: absolute;
    }

    &:hover {
      &:after {
        transform: none;
      }
    }
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    padding: 3rem;
    font-size: 1rem;
    padding-bottom: 0;
    padding-top: 1.5rem;

    a {
      opacity: 0.5;
      padding-top: 2.25rem;
    }
  }
`

const Ele = () => {
  const Slides = SlidesData().slides
  // const [obj, objInView] = useInView()

  const [active, setActive] = useState(0)
  useEffect(() => {
    let interval = 0

    interval = setInterval(() => {
      if (active > 1) {
        setActive(0)
      } else {
        setActive(active + 1)
      }
    }, 15000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Box>
      <Nav>
        {Slides &&
          Slides.map((slide, index) => (
            <Title
              className={active === index ? "is-active" : ""}
              key={index}
              index={index}
              label={slide.slide_title.text}
              to={slide.to ? "/" + slide.to.toLowerCase() : "/"}
            />
          ))}

        <Caption>
          <div>
            <p>{SlidesData().intro.text}</p>
            <CtaBtn>
              <a
                href="https://filmfreeway.com/TheIkonAwards"
                target="_blank"
                rel="noreferrer"
                title="Submit my Film"
              >
                Submit My Film
              </a>
            </CtaBtn>
            <a href="#about" className="futura-pt">
              Scroll down
            </a>
          </div>
        </Caption>
      </Nav>

      <Videos>
        {Slides &&
          Slides.map((slide, index) => (
          /* <Video
              className={active === index ? "is-active" : ""}
              key={index}
              src={slide.slide_loop.url}
              poster={slide.slide_image.fluid.src}
            ></Video>*/
          ))}
      </Videos>
    </Box>
  )
}

export default Ele
