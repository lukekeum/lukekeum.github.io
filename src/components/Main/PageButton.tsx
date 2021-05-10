import "./PageButton.scss"
import React, { useMemo } from "react"

interface PageButtonProps {
  page: number
  postLength: number
  goPrevFn?: () => void
  goNextFn?: () => void
}

export default function PageButton({
  page,
  postLength,
  goNextFn,
  goPrevFn,
}: PageButtonProps) {
  const canGoNextPage = useMemo(() => {
    let result = false
    let postLengthDup = postLength
    if (postLength % 3 === 0) postLengthDup += 1
    if (page < postLengthDup / 3) result = true
    return result
  }, [page])

  const canGoPrevPage = useMemo(() => {
    let result = false
    if (page > 1) result = true
    return result
  }, [page])

  return (
    <div id="main__page_button">
      <p
        id={
          !canGoPrevPage
            ? "main__page_button_disabled"
            : "main__page_button_button"
        }
        onClick={canGoPrevPage ? goPrevFn : () => {}}
      >
        이전
      </p>
      <div></div>
      <p
        id={
          !canGoNextPage
            ? "main__page_button_disabled"
            : "main__page_button_button"
        }
        onClick={canGoNextPage ? goNextFn : () => {}}
      >
        다음
      </p>
    </div>
  )
}
