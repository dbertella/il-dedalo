module.exports = {
  siteMetadata: {
    title: `Il dedalo 🌸 Soul Space`,
    description: `Il Dedalo è uno spazio per l'anima, la creatività, la cura e la bellezza di condividere.`,
    author: `@denb_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Il dedalo - Soul Space`,
        short_name: `Il dedalo`,
        start_url: `/`,
        background_color: `#669999`,
        theme_color: `#669999`,
        display: `minimal-ui`,
        icon: `src/images/logo-piuma.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
