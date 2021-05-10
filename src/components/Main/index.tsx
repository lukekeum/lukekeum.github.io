import "./index.scss"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { usePostListingQuery } from "../../hooks/usePostListingQuery"
import DateViewer from "./DateViewer"
import PostCards from "./PostCards"
import PageButton from "./PageButton"

interface MainProps {}

export interface PostListType {
  path?: string
  title?: string
  date?: string
  readingTime?: number
}

export default function Main({}: MainProps) {
  const [page, setPage] = useState<number>(1)
  const [postList, setPostList] = useState<Array<PostListType | undefined>>([])
  const posts = usePostListingQuery()
  const getPostList = () => {
    const postList: any[] = []
    const postDatas = posts.allMarkdownRemark.edges
    const postNumberList = [3 * page - 3, 3 * page - 2, 3 * page - 1]
    postNumberList.forEach(number => {
      const postEdges = postDatas[number]
      if (!postEdges) return postList.push(undefined)
      postList.push({
        path: postEdges.node.frontmatter.slug,
        title: postEdges.node.frontmatter.title,
        date: postEdges.node.frontmatter.date,
        readingTime: postEdges.node.timeToRead,
      })
    })
    setPostList(postList)
  }
  const postLength = useMemo(() => posts.allMarkdownRemark.edges.length, [])

  useEffect(() => {
    getPostList()
  }, [page])

  return (
    <section id="main">
      <DateViewer data={postList} />
      <PostCards data={postList} />
      <PageButton
        page={page}
        postLength={postLength}
        goPrevFn={() => setPage(page - 1)}
        goNextFn={() => setPage(page + 1)}
      />
    </section>
  )
}
