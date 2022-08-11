import { useStaticQuery, graphql } from "gatsby"

export const TribeData = () => {
  const data = useStaticQuery(
    graphql`
      query TribeDataQuery {
        prismicTribePage {
          data {
            left_image {
              fluid {
                src
              }
            }
            right_image {
              fluid {
                src
              }
            }
            description {
              text
            }
          }
        }
      }
    `
  )

  return data.prismicTribePage.data
}
