import React from "react"
import { graphql } from "gatsby"
import Posts from "../../components/Posts"
import Navbar from "../../components/Navbar"
import Seo from "../../components/Seo"

export interface PostQueryType {
  html: string
  frontmatter: {
    date: string
    slug: string
    title: string
  }
}

interface TemplateProps {
  data: {
    markdownRemark: PostQueryType
  }
}

export default function Template({ data }: TemplateProps) {
  const { markdownRemark } = data

  return (
    <>
      <Seo title={`${markdownRemark.frontmatter.title}`} />
      <Navbar />
      <Posts data={markdownRemark} />
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
