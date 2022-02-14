import React from "react"

import { PaginationProps } from "./types"

export const Pagination: React.FC<PaginationProps> = ({
  page,
  picturesCounter,
  prev,
  next
}) => <div className="pagination">
  <button
    className="button"
    disabled={page === 1}
    onClick={prev}
  >
      Prev
  </button>
  <p className="pagination__text">
      Page {page} of {Math.floor(picturesCounter)}
  </p>
  <button
    className="button"
    disabled={page >= picturesCounter}
    onClick={next}
  >
      Next
  </button>
</div>
