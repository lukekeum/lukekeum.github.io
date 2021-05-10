import "./PostCard.scss"
import React, { useCallback } from "react"
import { PostListType } from "."
import { Link } from "gatsby"

interface PostCardProps {
  data?: PostListType | undefined
}

export default function PostCard({ data }: PostCardProps) {
  const changeToKoreanDate = useCallback((date: string | undefined) => {
    if (!date) return
    const dates = date.split("-")
    return `${dates[0]}년 ${dates[1]}월 ${dates[2]}일`
  }, [])

  return (
    <div className="main__post_card">
      <h1>
        <Link to={`/posts/${data?.path}`}>{data?.title}</Link>
      </h1>
      <div>
        <p>
          {data?.readingTime}
          {data && "분 읽기"}
        </p>
        <p>{changeToKoreanDate(data?.date)}</p>
      </div>
    </div>
  )
}
