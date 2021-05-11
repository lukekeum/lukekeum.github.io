import "./index.scss"
import React, { useMemo } from "react"
import { PostQueryType } from "../../pages/posts/{MarkdownRemark.frontmatter__slug}"

interface PostsProps {
  data: PostQueryType
}

export default function Posts({ data }: PostsProps) {
  const date = useMemo(() => {
    const date = String(data.frontmatter.date).replaceAll("-", "/")
    return date
  }, [data])

  return (
    <div id="posts__container">
      <div id="posts__text__area">
        <div id="posts__title">
          <h1>{data.frontmatter.title}</h1>
          <div></div>
        </div>
        <div
          id="posts__content markdown"
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div id="posts__ending"></div>
      </div>
      <div id="posts__time_area">
        <h1>{date}</h1>
      </div>
    </div>
  )
}
