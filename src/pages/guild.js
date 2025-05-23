import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Meta from "../utilities/seo"
import Splash from "../components/guild/wrap"
import { useGlobalDispatchContext } from "../utilities/context"
import { graphql } from "gatsby"
import GuildMembers from "../components/guild/guildMembers"

const Main = styled.main`
  background: #000;
  position: relative;
  z-index: 2;
`

const Page = ({ data }) => {
  const dispatch = useGlobalDispatchContext()
  const pageData = data.prismicGuildPage.data

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      value: "guild",
    })

    return () => {
      dispatch({
        type: "SET_ACTIVE_SECTION",
        value: "",
      })
    }
  }, [dispatch])

  return (
    <>
      <Splash />
      {/* <Meta
        title={pageData.title.text}
        image={{
          url: pageData.image.url,
          height: pageData.image.dimensions.height,
          width: pageData.image.dimensions.width,
        }}
      />
      <Main>
        <GuildMembers pageData={pageData} />
      </Main> */}
    </>
  )
}

export default Page

export const query = graphql`
  query GuildQuery {
    prismicGuildPage {
      data {
        title {
          text
        }
        image {
          url
          dimensions {
            width
            height
          }
        }
      }
    }
  }
`
