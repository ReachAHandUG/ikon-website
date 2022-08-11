import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Wrap = styled.div`
  padding-top: 7.5rem;

  @media screen and (max-width: 766px) {
    padding-top: 3.5rem;
  }
`

const Category = styled.div`
  padding-bottom: 4.5rem;

  &:last-child {
    padding-bottom: 0;
  }

  > span {
    display: block;
    padding-bottom: 1rem;
    font-size: 0.75rem;
  }
`

const Box = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;

  a {
    margin-right: 1.5rem;
    display: inline-block;
    height: 3rem;
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
    width: 11rem;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 766px) {
    flex-wrap: wrap;

    a {
      width: 6rem;
      height: 4rem;
      margin-bottom: 1.5rem;
    }
  }
`
const Ele = () => {
  const categories = ["Organizer", "Sponsor", "Media"]
  const partners = PartnerData()

  return (
    <Wrap>
      {categories.map((cat, index) => {
        let catPartners = []
        let title = ""

        switch (cat) {
          case "Sponsor":
            title = "Sponsors"
            break

          case "Organizer":
            title = "Main Partners"
            break

          case "Media":
            title = "Media"
            break

          default:
            break
        }

        partners.forEach((item, id) => {
          if (item.node.data.type === cat) {
            catPartners.push(partners[id])
          }
        })

        return (
          <Category key={index}>
            <span className="futura-pt">{title}</span>
            <Box key={index}>
              {catPartners.map((partner, key) => {
                let node = partner.node.data
                return (
                  <a
                    key={key}
                    rel="noreferrer"
                    target="_blank"
                    href={node.website.url}
                    title={node.title.text}
                  >
                    <img src={node.logo.fluid.src} alt={node.title.text} />
                  </a>
                )
              })}
            </Box>
          </Category>
        )
      })}
    </Wrap>
  )
}
export default Ele

export const PartnerData = () => {
  const data = useStaticQuery(
    graphql`
      query PartnersQuery {
        allPrismicPartner {
          edges {
            node {
              data {
                type
                website {
                  url
                }
                title {
                  text
                }
                logo {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allPrismicPartner.edges
}
