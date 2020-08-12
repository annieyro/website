module.exports = {
  // Built-in
  siteMetadata: {
    title: `annieyro`,
    description: `annie ro - personal & professional website`,
    author: `annieyro`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `annieyro`,
        short_name: `annieyro`,
        start_url: `/`,
        background_color: `#F8E7E9`,
        theme_color: `#F8E7E9`,
        display: `minimal-ui`,
        icon: `src/images/icon-dark.jpg`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    // Custom
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lora`,
            variants: [`500`, `500i`, `600`, `600i`, `700`],
          },
          {
            family: `Karla`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Arapey`,
            variants: [`400`, `400i`],
          },
          { family: `Athiti`, variants: [`300`, `400`, `500`, `600`, `700`] },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // Images
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Markdown files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 440,
            },
          },
        ],
      },
    },
  ],
};
