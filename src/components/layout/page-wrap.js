import React, { useEffect } from "react"
import Meta from "../../utilities/seo"
import styled from "styled-components"
import Glimmer from "../shared/glimmer"
import Header from "./page-header"
import { useGlobalDispatchContext } from "../../utilities/context"
import IkonLogo from "../shared/ikon-logo"

const Main = styled.main`
  background: #000;
  position: relative;
  z-index: 0;
  padding-top: 4vw;
  padding-bottom: 18vw;

  &.clear-padding {
    padding-bottom: 0;
  }

  .o-glimmer {
    opacity: 0.3;
    top: -30vw;
    left: 0;
    transform: scale(1.9);
  }

  @media screen and (max-width: 766px) {
    padding: 12rem 0 12rem;
  }
`

const Ele = ({ title, caption, image, children, section, type }) => {
  const dispatch = useGlobalDispatchContext()

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_SECTION",
      value: 'page',
    })

    dispatch({
      type: "SHOW_LOGO",
      value: "show",
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
        title={"IKON - " + title}
        image={image ? {
          url: image.url,
          height: image.height,
          width: image.width,
        } : ''}
      />
      <IkonLogo location="side" type={section} />
      <Main className={type}>
        <Header title={title} caption={caption} />
        <Glimmer />
        {children}
      </Main>
    </>
  )
}
export default Ele
