<template>
  <div class="container">
    <div
      style="height: calc(100vh - 88px)"
      class="d-flex justify-content-center align-items-center"
    >
      <div class="card bg-light p-3" style="width: 450px; max-width: 90%">
        <div class="card-body">
          <h1 class="mb-3">
            <i class="bi bi-emoji-frown"></i>
            Forgot password
          </h1>
          <hr />
          <p>Try to remember it!</p>
          <div class="d-grid mt-4">
            <router-link :to="{name: 'Login'}" class="btn btn-primary">
              Back to login page
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Forget'
  }
</script>

<style scoped></style>
