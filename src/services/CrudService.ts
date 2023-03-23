import axios from 'axios'
import type { PageableType, ParamsPageableType } from '@/types/crud-service/PageableType'

const PAGEABLE = 'pageable'

export const errorCallback = (error: unknown) => {
  console.error(error)
  return Promise.reject(error)
}

class CrudService<E = unknown> {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = `http://localhost:8080/api/${baseUrl}`
  }

  public static getPageableDefault<C = unknown>() {
    return {
      size: 0,
      content: [],
      totalElements: 0
    } as PageableType<C>
  }

  pageableParams(params: string) {
    return axios
      .get<E>(`${this.baseUrl}/${PAGEABLE}/${params}`)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  pageable(pageable: ParamsPageableType) {
    return axios
      .get<PageableType<E>>(`${this.baseUrl}/${PAGEABLE}`, {
        params: {
          size: pageable.size,
          page: pageable.pageNumber
        }
      })
      .then(({ data }) => {
        return {
          content: data.content,
          size: data.size,
          totalElements: data.totalElements
        }
      })
      .catch(errorCallback)
  }

  findAll() {
    return axios
      .get<E[]>(`${this.baseUrl}`)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  findId(id: string) {
    return axios
      .get<E>(`${this.baseUrl}/${id}`)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  save(data: unknown) {
    return axios
      .post<E>(`${this.baseUrl}`, data)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  update(id: string, data: unknown) {
    return axios
      .put<E>(`${this.baseUrl}/${id}`, data)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  delete(id: string) {
    return axios
      .delete<E>(`${this.baseUrl}/${id}`)
      .then((response) => response.data)
      .catch(errorCallback)
  }
}

export default CrudService
