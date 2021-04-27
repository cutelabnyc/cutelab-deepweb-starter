module.exports = {
    siteMetadata: {
        name: `CuteLab DeepWeb Starter`,
        description: `Template for self-hosted dynamic sites: Gatsby/Typescript/Styled-Components/Kubernetes`,
        author: `Max Ardito`,
        copyright: `CuteLab © 2021`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-tslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `markdown-pages`,
              path: `${__dirname}/markdown`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
    ],
}
