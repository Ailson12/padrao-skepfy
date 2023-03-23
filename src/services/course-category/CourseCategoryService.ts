import type CourseCategoryType from '@/types/course-category/CourseCategoryType'
import CrudService from '../CrudService'

class CourseCategoryService extends CrudService<CourseCategoryType> {
  public static init() {
    return new CourseCategoryService('course-category')
  }
}

export default CourseCategoryService
