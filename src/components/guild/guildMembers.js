import React, { useEffect, useState } from "react"
import Glimmer from "../shared/glimmer"
import Header from "./guildListHeader"
import Box from "../awards/categories/box"
import Bkg from "./background"
import Grid from "./guildGrid"
import { useStaticQuery, graphql } from "gatsby"
import GuildModal from "./singleModal"

const Ele = ({ pageData }) => {
  const [members, setMembers] = useState([])

  let membersList = []
  GuildData().forEach((member, index) => {
    membersList.push(member.node.data)
  })

  const [showModal, setShowModal] = useState(false)
  const [member, setMember] = useState()

  const showMember = member => {
    console.log("CLICKED MEMBER", member)
    setShowModal(true)
    setMember(member)
  }

  useEffect(() => {
    if (membersList.length) {
      console.log(membersList)
      setMembers(membersList)
    }
  }, [])

  useEffect(() => {
    let body = (body = document.getElementsByTagName("body")[0])
    if (showModal) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "visible"
    }
  }, [showModal])

  return (
    <>
      {showModal && (
        <GuildModal onClose={() => setShowModal(false)} member={member} />
      )}

      <Box id="sec-categories">
        <Glimmer className="passion" />
        <Header caption={pageData.caption} />
        <Grid members={members} showMember={e => showMember(e)} />
        <Bkg />
      </Box>
    </>
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
