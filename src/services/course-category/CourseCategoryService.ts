import CrudService from '../CrudService'

class CourseCategoryService extends CrudService {
  public static init() {
    return new CourseCategoryService('course-category')
  }
}

export default CourseCategoryService
