// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

//  const path = require("path")

//  module.exports.createPages = async ({ graphql, actions }) => {
//      const { createPage } = actions
//      const resourcesTemplate = path.resolve("./src/templates/resources.tsx")

//     const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//     // Handle errors
//     if (result.errors) {
//         reporter.panicOnBuild(`Error while running GraphQL query`)
//         return
//     }
 
//     // Create a page for each resource
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: node.frontmatter.slug,
//           component: resourcesTemplate,
//           context: {
//             // Any additional data that should be passed to the component
//             slug: node.frontmatter.slug,
//             title: node.frontmatter.title,
//             date: node.frontmatter.date
//           },
//         })
//       })
//  }

 