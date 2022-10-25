import React, { useEffect } from "react"
import styled from "styled-components"
import Meta from "../utilities/seo"
import Splash from "../components/awards/splash/wrap"
import Categories from "../components/awards/categories/wrap"
import Calendar from "../components/awards/calendar"
import Accolade from "../components/awards/accolade/wrap"
import Nominations from "../components/awards/nominations/wrap"
import { useGlobalDispatchContext } from "../utilities/context"
import IkonLogo from "../components/shared/ikon-logo"
import { graphql } from "gatsby"

const Main = styled.main`
  background: #000;
  position: relative;
  z-index: 0;
`

const Page = ({ data }) => {
  const dispatch = useGlobalDispatchContext()
  const pageData = data.prismicAwardsPage.data

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      value: "awards",
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
      <IkonLogo location="side" type="awards" />
      <Main>
        <Splash />
        <Categories />
        <Calendar />
        <Accolade />
        <Nominations />
      </Main>
    </>
  )
}

export default Page

export const query = graphql`
  query AwardsPageQuery {
    prismicAwardsPage {
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
        description {
          text
        }
      }
    }
  }
`
