import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import InView from "../../shared/in-view"
import Pattern from "../../../images/elements/round-pattern-a.svg"
import { useGlobalDispatchContext } from "../../../utilities/context"
import StackedTitle from "../../shared/stacked-title"
import PatternStrip from "../../shared/pattern-block"

const Box = styled.div`
  padding: 2vw 0 0;
  position: relative;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 766px) {
    width: 100%;
    padding: 4.5rem 0 3.5rem;
  }
`

const Bkg = styled.figure`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url("${Pattern}");
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.04;
  transform: scale(1.3);
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.5s;
  /* justify-content: left; */

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;
  }
`

const Geo = styled.button`
  width: 20%;
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  padding: 1.25vw;
  padding-bottom: 4vw;
  text-align: center;
  perspective: 1000px;
  height: 21vw;
  margin-bottom: 3vw;
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
    padding-top: 1rem;
  }
`

const Section = styled.section`
  padding-bottom: 5rem;
  position: relative;

  .title {
    padding-left: 0;
    padding-bottom: 2rem;

    h1 {
      padding-left: 1.2rem;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #ff9800;
      width: 100%;
      right: 0;
      top: 0;
      height: 1px;
      opacity: 25%;
    }
    .o-pattern-block {
      position: absolute;
      top: 1rem;
      right: 0;
    }
  }

  &:last-child {
    padding-bottom: 0;
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
  let awards = []
  let awardsByCategory = [
    {
      title: "Film",
      list: [],
    },
    {
      title: "TV",
      list: [],
    },
    {
      title: "Special",
      list: [],
    },
  ]

  Awards().forEach((clan, index) => {
    const node = clan.node.data
    const awardCategory = clan.node.data.category

    const awardData = {
      index: index,
      title: node.title.text,
      description: node.description.text,
      image: node.hero.fluid.src,
      explainer: node.explainer ? node.explainer.embed_url : null,
      loop: node.loop.url,
    }

    let awardGroup = awardsByCategory.find(
      group => group.title == awardCategory
    )

    awards.push(awardData)
    if (awardGroup) {
      awardGroup.list.push(awardData)
    } else {
      console.log("group not found for " + node.title.text)
    }
  })

  //set awards list
  const [awardsList, setAwardsList] = useState([])
  useEffect(() => {
    if (awards.length) {
      setAwardsList(awards)
    }
  }, [])

  const dispatch = useGlobalDispatchContext()

  const setSelectedAward = index => {
    dispatch({
      type: "SET_SELECTED_AWARD",
      value: awardsList[index],
    })
  }

  return (
    <>
      <Box>
        {awards &&
          awardsByCategory.map((category, key) => {
            return (
              <Section key={key}>
                <div className="title">
                  <StackedTitle theme="cream" first={category.title} />
                  <PatternStrip />
                </div>

                {category.list.length && (
                  <Items>
                    {category.list.map((item, index) => (
                      <Geo
                        key={index}
                        onClick={() => {
                          setSelectedAward(index)
                        }}
                      >
                        <InView delay={index}>
                          <Card front>
                            <Image>
                              <img src={item.image} alt="" />
                            </Image>
                            {/* <Number>{index + 1}</Number> */}
                            <h2 className="futura-pt">{item.title}</h2>
                          </Card>
                          <Card back />
                        </InView>
                      </Geo>
                    ))}
                  </Items>
                )}
              </Section>
            )
          })}
        <Bkg />
      </Box>
    </>
  )
}
export default Ele

export const Awards = () => {
  const data = useStaticQuery(
    graphql`
      query ClansQuery {
        allPrismicClan(sort: { fields: data___order, order: ASC }) {
          edges {
            node {
              data {
                category
                description {
                  text
                }
                explainer {
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
