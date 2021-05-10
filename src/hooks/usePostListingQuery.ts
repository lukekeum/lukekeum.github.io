import { graphql, useStaticQuery } from "gatsby"

export const usePostListingQuery = () => {
  const postListData = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              date
            }
            timeToRead
          }
        }
      }
    }
  `)
  return postListData
}
