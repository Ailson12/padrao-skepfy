// import { Pageable } from "@/types/Pageable";
// import  } from "axios";
// import http from "../http-common";
// import { PAGEABLE } from "@/constants/path/PathRestConstants";
import axios from 'axios'

const PAGEABLE = 'pageable'

interface Pageable {
  pageNumber: number
  size: number
  sort?: string
}

export const errorCallback = (error: unknown) => {
  console.error(error)
  return Promise.reject(error)
}

class CrudService {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = `http://localhost:8080/api/${baseUrl}`
  }

  public static getPageableDefault() {
    return {
      size: 0,
      content: [],
      totalElements: 0
    }
  }

  pageableParams(params: string) {
    return axios.get(`${this.baseUrl}/${PAGEABLE}/${params}`)
  }

  pageable(pageable: Pageable) {
    return axios
      .get(`${this.baseUrl}/${PAGEABLE}`, {
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
      .get(`${this.baseUrl}`)
      .then((response) => response.data)
      .catch(errorCallback)
  }

  findId(id: string) {
    return axios.get(`${this.baseUrl}/${id}`)
  }

  save(data: unknown) {
    return axios.post(`${this.baseUrl}`, data)
  }

  update(id: string, data: unknown) {
    return axios.put(`${this.baseUrl}/${id}`, data)
  }

  delete(id: string) {
    return axios.delete(`${this.baseUrl}/${id}`)
  }
}

export default CrudService
