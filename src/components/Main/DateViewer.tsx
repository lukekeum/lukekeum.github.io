import "./DateViewer.scss"
import React, { useEffect, useState } from "react"
import { PostListType } from "."

interface DateViewerProps {
  data: Array<PostListType | undefined>
}

export default function DateViewer({ data }: DateViewerProps) {
  const [firstDate, setFirstDate] = useState("")
  const [lastDate, setLastDate] = useState("")
  useEffect(() => {
    const dateList: string[] = []
    data.forEach(v => {
      if (v === undefined) return
      dateList.push(String(v.date))
    })

    setLastDate(dateList[0])
    setFirstDate(dateList[dateList.length - 1])
  }, [data])

  return (
    <div id="main__date_viewer">
      <h1>
        {firstDate} ~ {lastDate}
      </h1>
    </div>
  )
}
