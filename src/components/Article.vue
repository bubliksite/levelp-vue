<template>
  <div class="article">
    <h2 class="article__title">{{ article.title }}</h2>
    <p class="article__date">{{ article.date }}</p>
    <div class="article__body">
      <p>{{ article.excerpt }}</p>
      <div v-html="article.text" v-if="isOpen"></div>
    </div>
    <button @click="toggleNews">
      {{ isOpen ? 'Hide' : 'Read more' }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    emits: ['clicked'],
    props: {
      article: Object
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleNews() {
        !this.isOpen ? this.$emit('clicked') : null
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped></style>
