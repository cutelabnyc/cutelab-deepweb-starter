// import React from "react"
// import { graphql } from "gatsby"

// export const ql_resources = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `

// interface ResourceProps {
//     props: any;
// }

// const Resource: React.FC<ResourceProps> = ({data}) => {
//     const { markdownRemark } = data // data.markdownRemark holds your post data
//     const { frontmatter, html } = markdownRemark
//     return (
//             <>
//                 <h1>{frontmatter.title}</h1>
//                 <h2>{frontmatter.date}</h2>
//                 <div
//                 className="blog-post-content"
//                 dangerouslySetInnerHTML={{ __html: html }}
//                 />
//             </>
//     );
// };

// export default Resource;
