module.exports = {
  siteMetadata: {
    title: `IKON - Educate, Connect, Award`,
    description: `The iKon initiative is an empowerment platform that will Educate, Connect and Award inspiring trailblazers who are contributing to transforming Africa by tackling Africa’s most challenging socio-economic problems. It will recognise individuals who have excelled in realms such as business, social enterprise, agro-processing, innovation & ICT, the arts, sports, and journalism among others.`,
    author: `@addmaya`,
    siteUrl: `https://www.theikon.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/shell.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-MEE6EH6ZET"]
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "ikon",
        schemas: {
          ikon_page: require(`./src/schemas/ikon_page.json`),
          guild_page: require(`./src/schemas/guild_page.json`),
          tribe_page: require(`./src/schemas/tribe_page.json`),
          awards_page: require(`./src/schemas/awards_page.json`),
          clan: require(`./src/schemas/clan.json`),
          event: require(`./src/schemas/event.json`),
          gallery: require(`./src/schemas/gallery.json`),
          clan: require(`./src/schemas/clan.json`),
          partner: require(`./src/schemas/partner.json`),
          video: require(`./src/schemas/video.json`),
          privacy_policy: require(`./src/schemas/privacy_policy.json`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `src/images/logos/favicon.png`,
      },
    },
  ],
}
