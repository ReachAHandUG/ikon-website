import React from "react"
import Main from "../components/layout/page-wrap"
import { graphql } from "gatsby"
import Content from '../components/layout/page-content'

const Ele = ({ data }) => {
    const pageData = data.prismicPrivacyPolicy.data.content.html
    return (
        <>
            <Main title="Privacy Policy">
                <Content>
                    <section dangerouslySetInnerHTML={{ __html: pageData }}></section>
                </Content>
            </Main>
        </>
    )
}
export default Ele

export const query = graphql`
  query PrivacyPolicyQuery {
  prismicPrivacyPolicy {
    data {
      content {
        html
      }
    }
  }
}
`
