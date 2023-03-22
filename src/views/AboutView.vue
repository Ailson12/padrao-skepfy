<script lang="ts">
interface Book {
  title: string
  author: string
  year: number
}

import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  },
  data() {
    return {
      user: {
        info: { idade: 21 },
        mulheres: ['a', 'b']
      }
    }
  },
  methods: {
    changeValues() {
      this.user.info.idade++;
      this.user.mulheres.push('C')
    }
  }
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ user }}</p>

    <button @click="changeValues">ALTERA VALORES</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
