<template>
  <Header />
  <router-view />
</template>

<script>
  import Header from './components/Header'

  export default {
    //name: 'App',
    components: {Header}
  }
</script>

<style lang="scss">
  @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');
  body {
    background-color: #f5f5f5;
  }
</style>
