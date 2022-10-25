import React, { useEffect } from "react"
import styled from "styled-components"
import Meta from "../utilities/seo"
import Splash from "../components/tribe/wrap"
import { useGlobalDispatchContext } from "../utilities/context"
import { graphql } from "gatsby"

const Main = styled.main`
  background: #000;
  position: relative;
  z-index: 0;
`

const Ele = ({ data }) => {
  const dispatch = useGlobalDispatchContext()
  const pageData = data.prismicTribePage.data

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      value: "tribe",
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
      <Meta
        title={pageData.title.text}
        image={{
          url: pageData.image.url,
          height: pageData.image.dimensions.height,
          width: pageData.image.dimensions.width,
        }}
      />

      <Main>
        <Splash />
      </Main>
    </>
  )
}

export default Ele

export const query = graphql`
  query TribeQuery {
    prismicTribePage {
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
