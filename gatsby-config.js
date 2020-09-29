module.exports = {
  siteMetadata: {
    title: `CFI Libraries`,
    description: `The Center for Inquiry strives to foster a secular society based on reason, science, freedom of inquiry, and humanist values.`,
    author: `Alex Nicaise`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://centerforinquiry.org/libraries/graphql`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cfi-libraries`,
        short_name: `cfilibraries`,
        start_url: `/`,
        icon: `src/images/cfi-favicon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
