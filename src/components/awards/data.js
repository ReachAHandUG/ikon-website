import { useStaticQuery, graphql } from "gatsby"

export const AwardsPageData = () => {
  const data = useStaticQuery(
    graphql`
      query AwardsPageDataQuery {
        prismicAwardsPage {
          data {
            rooted_loop {
              url
            }
            rooted_image {
              url
              fluid {
                src
              }
            }
            rooted_description {
              text
            }
            right_image {
              fluid {
                src
              }
            }
            nomination_description {
              text
            }
            left_image {
              url
              fluid {
                src
              }
            }
            image {
              fluid {
                src
              }
            }
            harness_loop {
              url
            }
            harness_image {
              url
              fluid {
                src
              }
            }
            harness_description {
              text
            }
            criteria {
              criteria_title {
                text
              }
              criteria_image {
                fluid {
                  src
                }
              }
              criteria_description {
                text
              }
            }
            center_image {
              fluid {
                src
              }
            }
            categories_description {
              text
            }
            background_video {
              url
            }
          }
        }
      }
    `
  )

  return data.prismicAwardsPage.data
}
