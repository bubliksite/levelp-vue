<template>
  <header class="bg-dark">
    <div class="container">
      <nav class="nav py-4 justify-content-center">
        <router-link
          active-class="active text-waring"
          class="nav-link text-light"
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
          {id: 2, title: 'News', name: 'News'},
          {id: 3, title: 'Application', name: 'Application'},
          {id: 4, title: 'Mail', name: 'Mail'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-link.active {
    font-weight: bold;
    color: #fd7e14 !important;
  }
</style>
