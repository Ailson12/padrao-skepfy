interface CrudServiceType<T = unknown> {
  size: number
  content: Array<T>
  totalElements: number
}

export default CrudServiceType
