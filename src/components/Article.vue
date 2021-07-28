<template>
  <div class="article">
    <h3 class="article__title">{{ article.title }}</h3>
    <p class="article__date">{{ article.date }}</p>
    <div class="article__body">
      <p>{{ article.excerpt }}</p>
      <div v-html="article.text" v-if="isOpen"></div>
    </div>
    <button @click="toggleNews">{{ isOpen ? 'Hide' : 'Read more' }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Article',
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
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped></style>
