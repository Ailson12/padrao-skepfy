<template>
  <div>
    <table id="customers" aria-describedby="mydesc">
      <tr>
        <th>ID</th>
        <th>Nome</th>
      </tr>
      <tr v-for="item in pageable.content" :key="item.entityId">
        <td>{{ item.entityId }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CrudService from '@/services/CrudService'
import type CourseCategoryType from '@/types/course-category/CourseCategoryType'
import CourseCategoryService from '@/services/course-category/CourseCategoryService'

export default defineComponent({
  data() {
    return {
      service: CourseCategoryService.init(),
      pageable: CrudService.getPageableDefault<CourseCategoryType>()
    }
  },
  mounted() {
    this.fetchPageable()
  },
  methods: {
    fetchPageable() {
      this.service
        .pageable({
          pageNumber: 0,
          size: 12
        })
        .then((data) => (this.pageable = data))
    }
  }
})
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
