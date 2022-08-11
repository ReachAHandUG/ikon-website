import React from "react"
import styled from "styled-components"
import InView from "../../shared/in-view"
import { AwardsPageData } from "../data"

const Box = styled.ul`
  padding: 7.5vw 0 7.842vw;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  li {
    width: 50%;

    .is-visible {
      section:after {
        transform: none;
      }
    }
  }

  h3 {
    color: #d5ac77;
    font-size: 1.125rem;
    padding-bottom: 2rem;
  }

  p {
    line-height: 1.9;
  }

  section {
    position: relative;
    padding: 4.5rem 0;
    padding-right: 7.649vw;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: calc(100% - 7.649vw);
      height: 1px;
      background: #c8a883;
      transition: transform 1s ease 1s;
      transform-origin: 0 0;
      transform: scale3d(0, 1, 1);
      z-index: 1;
      opacity: 0.2;
    }
  }

  figure {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    position: absolute;
    top: 2rem;
    left: calc(-7.649vw - 0.5rem);
    width: 6.649vw;
    height: 6.649vw;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 1023px) {
    section {
      padding-right: 1.5rem;
    }
  }

  @media screen and (max-width: 766px) {
    display: block;
    li {
      width: 100%;
    }

    section {
      padding-right: 0;
      padding-left: 5rem;
    }

    figure {
      left: 0;
      top: 4.5rem;
      width: 21vw;
      height: 21vw;
      left: -2rem;
    }
  }
`

const Ele = () => {
  const criteria = AwardsPageData().criteria
  return (
    <Box>
      {criteria &&
        criteria.map((item, index) => {
          return (
            <li key={index}>
              <InView animation="fade-in">
                <section>
                  <figure>
                    <img src={item.criteria_image.fluid.src} alt="" />
                  </figure>
                  <h3 className="futura-pt">{item.criteria_title.text}</h3>
                  <p>{item.criteria_description.text}</p>
                </section>
              </InView>
            </li>
          )
        })}
    </Box>
  )
}
export default Ele
