export interface PaginationProps {
  page: number
  picturesCounter: number
  prev(): void
  next(): void
}
