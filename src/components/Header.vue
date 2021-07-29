<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link
          class="nav__item"
          v-for="item in menu"
          :key="item.id"
          :to="{name: item.name}"
          exact
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        menu: [
          {id: 1, title: 'Home', name: 'Home'},
          {id: 2, title: 'News', name: 'News'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
