import React from "react"
import styled from "styled-components"
import InlineBtn from "../../shared/inline-button"
import InView from "../../shared/in-view"
import { AboutData } from "./about-data"

const Box = styled.div`
  padding-top: 11.696vw;
  padding-bottom: 5vw;
  margin: 0 6vw;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1023px) {
    ul {
      display: block;
    }
  }

  @media screen and (max-width: 766px) {
    margin: 0;
    padding: 0 3rem;
    padding-top: 4.5rem;

    ul {
      display: block;
    }
  }
`

const Item = styled.li`
  width: 33.3%;
  padding-bottom: 8.696vw;

  a .futura-pt {
    font-size: 0.875rem;
  }

  .o-inview {
    display: flex;
  }

  .is-visible & {
    opacity: 0;
  }

  section {
    width: 60%;
  }

  figure {
    width: 40%;
    height: 17.504vw;
    position: relative;
    left: -1.5rem;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 1.25rem;

    &.awards {
      color: #b98027;
    }

    &.guild {
      color: #5ec1a5;
    }

    &.tribe {
      color: #ec423c;
    }
  }

  h2,
  p {
    padding-bottom: 2.5rem;
  }

  p {
    font-size: 0.935rem;
    line-height: 1.8;
  }

  @media screen and (max-width: 1023px) {
    width: 78%;
    margin: 0 auto;
    padding-bottom: 4rem;

    p {
      padding-bottom: 1rem;
    }

    figure {
      left: 0;
      height: 18vw;
      top: 1rem;
    }
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    padding-bottom: 5rem;

    &:last-child {
      padding-bottom: 0;
    }

    p {
      padding-bottom: 1rem;
    }

    figure {
      left: 0;
      height: 40vw;
    }
  }
`

const Ele = () => {
  return (
    <Box>
      <ul>
        {AboutData().arms &&
          AboutData().arms.map((arm, index) => (
            <Item key={index}>
              <InView animation="fade-in">
                <section>
                  <h2 className="futura-pt guild">{arm.arm_title.text}</h2>
                  <p>{arm.arm_description.text}</p>
                  <InlineBtn
                    to={
                      arm.arm_title.text
                        ? "/" + arm.arm_title.text.toLowerCase()
                        : "/"
                    }
                    label="Explore"
                    method="link"
                  />
                </section>
                <figure>
                  <img src={arm.arm_image.fluid.src} alt="" />
                </figure>
              </InView>
            </Item>
          ))}
      </ul>
    </Box>
  )
}
export default Ele
