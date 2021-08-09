<template>
  <div class="container my-5">
    <div class="d-flex justify-content-center">
      <div class="text-center">
        <h1 class="mb-3">Vuex Counter</h1>
        <div class="d-flex justify-content-center">
          <button @click="increment('-')" class="btn btn-primary">-</button>
          <h1 class="mx-5">{{ $store.getters.counter }}</h1>
          <button @click="increment('+')" class="btn btn-primary">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VuexCounter',
    methods: {
      increment(sign) {
        this.$store.commit('increment', sign)
      }
    }
  }
</script>

<style scoped>
  button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
