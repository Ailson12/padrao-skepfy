<template>
  <div>
    <course-category-table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CourseCategoryTable from '@/views/course-category/CourseCategoryTable.vue'

export default defineComponent({
  components: {
    CourseCategoryTable
  },
  data() {
    return {
      idade: 20
    }
  }
})
</script>
