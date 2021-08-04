<template>
  <nav v-if="isVisible">
    <div class="container">
      <ul class="navbar-menu menu">
        <li class="menu-item"></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      isVisible: Boolean
    }
  }
</script>

<style scoped></style>
