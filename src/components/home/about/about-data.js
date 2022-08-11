import { useStaticQuery, graphql } from "gatsby"

export const AboutData = () => {
  const data = useStaticQuery(
    graphql`
      query AboutQuery {
        prismicIkonPage {
          data {
            description {
              text
            }
            arms {
              arm_title {
                text
              }
              arm_image {
                url
                fluid {
                  src
                }
              }
              arm_description {
                text
              }
            }
          }
        }
      }
    `
  )

  return data.prismicIkonPage.data
}
