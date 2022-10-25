import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Meta from "../utilities/seo"
import Splash from "../components/home/splash/wrap"
import About from "../components/home/about/wrap"
import IkonLogo from "../components/shared/ikon-logo"
import Gallery from "../components/home/featured-gallery"
import Events from "../components/home/events"
import Video from "../components/home/featured-video"
import { useGlobalDispatchContext } from "../utilities/context"

const Page = ({ data }) => {
  const dispatch = useGlobalDispatchContext()
  const pageData = data.prismicIkonPage.data

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      value: "initiative",
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
          url: pageData.hero.url,
          height: pageData.hero.dimensions.height,
          width: pageData.hero.dimensions.width,
        }}
      />
      <IkonLogo location="side" />
      <Splash />
      <About />
      <Video />
      <Gallery />
      <Events />
      {/* <Stream /> */}
    </>
  )
}

export default Page

export const query = graphql`
  query IndexQuery {
    prismicIkonPage {
      data {
        title {
          text
        }
        hero {
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
