export interface PaginationAwarePageContext {
  pageEntries: string[]
  pagination: {
    pageEntries: string[]
    currentPageIndex: number
    nextPagePath: string | null
    previousPagePath: string | null
    pageCount: number
    pathPrefix: string
    totalCount: number
  }
}
