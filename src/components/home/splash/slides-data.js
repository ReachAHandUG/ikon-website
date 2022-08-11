import { useStaticQuery, graphql } from "gatsby"

export const SlidesData = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        prismicIkonPage {
          data {
            slides {
              slide_title {
                text
              }
              slide_loop {
                url
              }
              slide_image {
                fluid {
                  src
                }
                url
              }
              to
            }
            intro {
              text
            }
          }
        }
      }
    `
  )
  return data.prismicIkonPage.data
}
