import { useStaticQuery, graphql } from "gatsby"

export const GuildData = () => {
  const data = useStaticQuery(
    graphql`
      query GuildDataQuery {
        prismicGuildPage {
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

  return data.prismicGuildPage.data
}
