<template>
  <div class="container">
    <div
      style="height: calc(100vh - 88px)"
      class="d-flex justify-content-center align-items-center"
    >
      <div class="card bg-light p-3" style="width: 450px; max-width: 90%">
        <div class="card-body">
          <h1 class="mb-3"><i class="bi bi-envelope me-3"></i>Mail App</h1>
          <hr />
          <form @submit.prevent="null">
            <div class="mb-3">
              <label class="form-label" for="email">Email</label>
              <input
                class="form-control"
                :class="{invalid: errors.email}"
                type="email"
                id="email"
                v-model="email"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">Password</label>
              <input
                class="form-control"
                :class="{invalid: errors.password}"
                type="password"
                id="password"
                v-model="password"
              />
              <span class="error">{{ errors.age }}</span>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <button class="btn btn-primary me-3" type="submit">
                <span>Login</span><i class="bi bi-box-arrow-in-right ms-2"></i>
              </button>
              <router-link
                :to="{name: 'Forget'}"
                class="btn btn-link"
                type="reset"
              >
                <small>Forgot password</small>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        errors: {
          email: null,
          password: null
        }
      }
    }
  }
</script>

<style scoped></style>
