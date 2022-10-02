import React from "react"
import Glimmer from "../shared/glimmer"
import Header from "./guildListHeader"
import Box from "../awards/categories/box"
import { useStaticQuery, graphql } from "gatsby"

const Ele = () => {
  GuildData().forEach((member, index) => {
    const node = member.node.data
    console.log(node)
  })

  return (
    <Box id="sec-categories">
      <Glimmer className="passion" />
      <Header />
    </Box>
  )
}
export default Ele

export const GuildData = () => {
  const data = useStaticQuery(
    graphql`
      query GuildMembersQuery {
        allPrismicGuildMember {
          edges {
            node {
              data {
                bio {
                  html
                }
                linkedin {
                  url
                }
                name {
                  text
                }
                photo {
                  fluid {
                    src
                  }
                }
                title {
                  text
                }
                twitter {
                  url
                }
                website {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allPrismicGuildMember.edges
}
