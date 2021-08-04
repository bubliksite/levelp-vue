<template>
  <div class="card">
    <div class="card__header header">
      <h1 class="header__title">Enter to Mail Service</h1>
    </div>
    <hr />
    <div class="card__body body">
      <form class="card__form form" @submit.prevent="null">
        <div class="form__input">
          <input
            :class="{invalid: errors.email}"
            type="email"
            id="email"
            placeholder="Email"
            v-model="email"
          />
          <span class="error">{{ errors.email }}</span>
        </div>
        <div class="form__input">
          <input
            :class="{invalid: errors.password}"
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <span class="error">{{ errors.age }}</span>
        </div>

        <button type="submit">Login</button>
        <button type="reset">Forgot password</button>
      </form>
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
