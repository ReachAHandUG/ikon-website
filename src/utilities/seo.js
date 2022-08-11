import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Cover from "../images/content/kibo.jpg"

function SEO({ description, lang, title, pathname, image, slug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  const metaTitle = `${title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
      ].concat(
        image
          ? [
            {
              property: "og:image",
              content: image.url,
            },
            {
              property: "og:image:width",
              content: image.width,
            },
            {
              property: "og:image:height",
              content: image.height,
            },
          ]
          : [
            {
              property: `og:image`,
              content: `${site.siteMetadata.siteUrl}${Cover}`,
            },
            {
              property: `og:image:width`,
              content: "1298",
            },
            {
              property: `og:image:height`,
              content: "1350",
            },
          ]
      )}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
