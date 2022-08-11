import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import InView from "../../shared/in-view"
import Pattern from "../../../images/elements/round-pattern-a.svg"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../../utilities/context"

const Box = styled.div`
  padding: 9.25vw 0 6vw;
  position: relative;

  @media screen and (max-width: 766px) {
    padding: 4.5rem 0 3.5rem;
  }
`

const Bkg = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%; 
  background-size: contain; 
  background-image: url('${Pattern}');
  background-position: center; 
  background-repeat: no-repeat;
  top:0; 
  left: 0;
  z-index: -1;
  opacity: 0.04;
  transform: scale(1.3)
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.5s;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;
  }
`

const Geo = styled.button`
  width: 14%;
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  padding: 1.25vw;
  padding-bottom: 4vw;
  text-align: center;
  perspective: 1000px;
  height: 21vw;
  margin-bottom: 6vw;
  color: #b98027;

  &:hover {
    img {
      transform: scale3d(1.2, 1.2, 1.2);
    }

    figure {
      &:after {
        opacity: 0.65;
      }
      &:before {
        transform: rotateZ(45deg) scale3d(1, 1, 1);
      }
    }
  }

  .o-inview {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: none;
    transition: transform 2.5s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
    z-index: 1;

    &.is-visible {
      transform: rotateY(180deg);
    }
  }
  @media screen and (max-width: 1023px) {
    width: 25%;
    height: 35vw;
    padding: 1.35rem;
  }

  @media screen and (max-width: 766px) {
    width: 50%;
    height: 65vw;
    margin-bottom: 4rem;
  }
`

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  will-change: transform;

  ${props =>
    props.front &&
    css`
      transform: rotateY(180deg);
    `}

  ${props =>
    props.back &&
    css`
      background: #02080e;
    `}

  h2 {
    font-size: 0.875rem;
  }
`

const Number = styled.span`
  display: block;
  line-height: 1;
  color: #fff;
  font-size: 0.625rem;
  padding: 1.25rem 0 0.5rem;
`

const Image = styled.figure`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after,
  &:before {
    position: absolute;
    content: "";
  }

  &:after {
    top: 0;
    left: 0;
    transition: opacity 0.5s;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #000;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    border: solid 0.25rem #02efac;
    transition: transform 0.5s;
    transform: rotateZ(45deg) scale3d(0, 0, 0);
    z-index: 2;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    will-change: transform;
  }
`

const Ele = () => {
  let categories = []
  ClanData().forEach((clan, index) => {
    const node = clan.node.data
    categories.push({
      index: index,
      title: node.title.text,
      description: node.description.text,
      image: node.hero.fluid.src,
      explainer: node.explainer ? node.explainer.embed_url : null,
      loop: node.loop.url,
    })
  })
  const dispatch = useGlobalDispatchContext()
  const { fetch_category } = useGlobalStateContext()

  const showCategory = index => {
    dispatch({
      type: "SHOW_CATEGORY",
      value: [categories[index]],
    })
  }

  useEffect(() => {
    if (fetch_category) {
      dispatch({
        type: "SHOW_CATEGORY",
        value: [categories[fetch_category - 1]],
      })
    }
  }, [fetch_category, categories, dispatch])

  return (
    <>
      <Box>
        <Items>
          {categories &&
            categories.map((item, index) => (
              <Geo
                key={index}
                onClick={() => {
                  showCategory(index)
                }}
              >
                <InView delay={index}>
                  <Card front>
                    <Image>
                      <img src={item.image} alt="" />
                    </Image>
                    <Number>{index + 1}</Number>
                    <h2 className="futura-pt">{item.title}</h2>
                  </Card>
                  <Card back />
                </InView>
              </Geo>
            ))}
        </Items>
        <Bkg />
      </Box>
    </>
  )
}
export default Ele

export const ClanData = () => {
  const data = useStaticQuery(
    graphql`
      query ClansQuery {
        allPrismicClan(sort: { fields: data___order, order: ASC }) {
          edges {
            node {
              data {
                description {
                  text
                }
                explainer {
                  video_id
                  embed_url
                }
                hero {
                  fluid {
                    src
                  }
                }
                loop {
                  url
                }
                title {
                  text
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allPrismicClan.edges
}
