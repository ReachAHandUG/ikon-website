import { useStaticQuery, graphql } from "gatsby"

export const EventsData = () => {
  const data = useStaticQuery(
    graphql`
      query EventsQuery {
        allPrismicEvent(sort: { fields: data___date, order: ASC }) {
          edges {
            node {
              data {
                title {
                  text
                }
                venue {
                  text
                }
                section
                image {
                  fluid {
                    src
                  }
                }
                date(formatString: "MMM DD YYYY")
              }
            }
          }
        }
      }
    `
  )

  return data.allPrismicEvent.edges
}
