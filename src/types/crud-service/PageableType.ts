interface ParamsPageableType {
  pageNumber: number
  size: number
  sort?: string
}

interface PageableType<C = unknown> {
  content: Array<C>
  size: number
  totalElements: number
}

export type { PageableType, ParamsPageableType }
