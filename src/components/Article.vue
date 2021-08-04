<template>
  <div>
    <div class="card bg-light text-body mt-4">
      <div class="card-header">#{{ article.id }}</div>
      <div class="card-body">
        <h4 class="card-title">{{ article.title }}</h4>
        <p class="card-text">{{ article.excerpt }}</p>
        <p class="card-text" v-html="article.text" v-if="isOpen"></p>
        <button class="btn btn-dark" @click="toggleNews">
          {{ isOpen ? 'Hide' : 'Read more' }}
        </button>
      </div>
    </div>
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
