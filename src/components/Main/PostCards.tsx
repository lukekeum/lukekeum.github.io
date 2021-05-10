import "./PostCards.scss"
import React from "react"
import { PostListType } from "."
import PostCard from "./PostCard"

interface PostCardsProps {
  data: Array<PostListType | undefined>
}

export default function PostCards({ data }: PostCardsProps) {
  return (
    <div id="main__post_cards">
      {data.map((v, i) => (
        <PostCard data={v} key={i} />
      ))}
    </div>
  )
}
