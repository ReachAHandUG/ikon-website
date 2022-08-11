import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ShuffleArray } from "../../utilities/shuffleArray"
import { useInView } from "react-intersection-observer"

const Box = styled.div`
  overflow: hidden;
`

const pan = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(-40%, 0, 0);
  }

  100% {
    transform: none;
  }
`

const Items = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 6.918vw 0 9.25vw;
  width: 130%;
  animation: ${pan} 120s linear infinite;

  &.is-paused {
    animation-play-state: paused;
  }

  div {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    height: 15vw;

    figure {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #000;
        opacity: 0.5;
        left: 0;
        top: 0;
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: sepia(100%);
  }

  @media screen and (max-width: 766px) {
    padding: 10rem 0;
    width: 200%;

    div {
      height: 30vw;
    }
  }
`

const Ele = () => {
  const data = ShuffleArray(FeaturedGalleryData()).slice(0, 10)
  const [photos, setPhotos] = useState()

  useEffect(() => {
    setPhotos(data)
  }, [])

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const [obj, objInView] = useInView()

  return (
    <Box ref={obj}>
      <Items className={objInView ? "" : "is-paused"}>
        {photos &&
          photos.map((item, index) => {
            let noise = randomInt(1.5, 4.2)
            let posNoise = randomInt(0, 6)

            let boxStyle = {
              height: 10 + 2.125 * noise + "vw",
              zIndex: noise,
              top: -1 * posNoise + "vw",
            }

            let imgStyle = {
              width: 100 + 5 * noise + "%",
              top: 0.265 * noise + "vw",
            }

            return (
              <div key={index} style={boxStyle}>
                <figure style={imgStyle}>
                  <img src={item.image.fluid.src} alt="" />
                </figure>
              </div>
            )
          })}
      </Items>
    </Box>
  )
}
export default Ele

export const FeaturedGalleryData = () => {
  const data = useStaticQuery(
    graphql`
      query FeaturedGalleryPhotos {
        allPrismicIkonPage {
          edges {
            node {
              data {
                featured_gallery {
                  document {
                    ... on PrismicGallery {
                      data {
                        images {
                          image {
                            fluid {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allPrismicIkonPage.edges[0].node.data.featured_gallery.document
    .data.images
}
