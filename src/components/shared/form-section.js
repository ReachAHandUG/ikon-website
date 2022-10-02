import React from "react"
import styled from "styled-components"
import InView from "./in-view"

const Box = styled.section`
  border-top: solid 1px rgb(185 128 39 / 26%);
  width: 45%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 5.5rem;

  .checkboxGroup {
    fieldset {
      display: flex;
      flex-wrap: wrap;

      > label {
        width: 50%;
        padding-bottom: 0.3rem;
      }
    }
  }

  h2 {
    font-size: 1.25rem;
    padding: 3rem 0;
    color: #c39f63;
  }

  .index {
    position: absolute;
    font-size: 10rem;
    line-height: 1;
    left: -10rem;
    top: 0;
    opacity: 0.07;
  }

  p {
    line-height: 2;
    font-size: 0.875rem;
    padding-bottom: 3rem;

    a {
      text-decoration: underline;
    }
  }

  &.has-byline {
    h2 {
      padding-bottom: 1rem;
    }

    .byline {
      display: block;
      padding-bottom: 3.5rem;
      font-family: "Playfair Display", serif;
      font-style: italic;
      opacity: 0.5;
    }
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 50%;
      padding-right: 1rem;
      &:nth-child(2n + 2) {
        margin-right: 0;
      }

      &.checkboxGroup {
        width: 100%;
        padding: 0;
      }
    }
  }

  > section {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 3rem;

    &:last-child {
      padding-bottom: 0;
    }
  }

  h3 {
    font-weight: bold;
    padding-bottom: 1.5rem;
    font-size: 0.93rem;
  }

  @media screen and (max-width: 766px) {
    width: calc(90% - 3rem);

    .stack {
      display: block;

      > div {
        width: 100%;
      }
    }
  }
`

const Ele = ({ title, caption, byline, index, children }) => {
  return (
    <Box className={byline ? "has-byline" : ""}>
      <InView animation="fade-in">
        {index && <span className="index">{index}</span>}
        {title && <h2 className="futura-pt">{title}</h2>}
        {byline && <span className="byline">{byline}</span>}
        {caption && <p>{caption}</p>}

        {children}
      </InView>
    </Box>
  )
}
export default Ele
