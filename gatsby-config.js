require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `IKON - Educate, Connect, Award`,
		description: `The iKon initiative is an empowerment platform that will Educate, Connect and Award inspiring trailblazers who are contributing to transforming Africa by tackling Africa’s most challenging socio-economic problems. It will recognise individuals who have excelled in realms such as business, social enterprise, agro-processing, innovation & ICT, the arts, sports, and journalism among others.`,
		author: `@addmaya`,
		siteUrl: `https://www.theikon.org`,
	},
	plugins: [
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/components/layout/shell.js`),
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ["G-MEE6EH6ZET"],
			},
		},
		{
			resolve: "gatsby-source-prismic",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN,
				customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#000`,
				theme_color: `#ff0000`,
				display: `minimal-ui`,
				icon: `src/images/logos/new_logo.png`,
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
