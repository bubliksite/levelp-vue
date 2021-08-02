<template>
  <div class="container">
    <div class="card">
      <div class="card__header header">
        <h1 class="header__title">Application</h1>
      </div>
      <hr />
      <div class="card__body body">
        <form class="card__form form" @submit.prevent="submitHandler">
          <div class="form__input">
            <label for="name">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              v-model="form.name"
            />
          </div>
          <div class="form__input">
            <label for="age">Your age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter age"
              v-model="form.age"
            />
          </div>
          <div class="form__input">
            <label for="city">Your city</label>
            <select id="city" v-model="form.city">
              <option selected disabled value="none">Choose the city...</option>
              <option value="moscow">Moscow</option>
              <option value="petersburg">St.Petersburg</option>
              <option value="helsinki">Helsinki</option>
              <option value="stockholm">Stockholm</option>
            </select>
          </div>
          <div class="form__group"></div>
          <div class="form__group">
            <div class="form__checkbox">
              <span class="label">Vue skills</span>
              <label>
                <input value="VueJS" v-model="form.skills" type="checkbox" />
                VueJS
              </label>
              <label>
                <input
                  value="Vue Router"
                  v-model="form.skills"
                  type="checkbox"
                />
                Vue Router
              </label>
              <label>
                <input value="Vuex" v-model="form.skills" type="checkbox" />
                Vuex
              </label>
              <label>
                <input value="Vue CLI" v-model="form.skills" type="checkbox" />
                Vue CLI
              </label>
            </div>
            <div class="form__checkbox">
              <span class="label">Do you ready for relocation?</span>
              <label
                ><input
                  type="radio"
                  name="relocation"
                  v-model="form.relocation"
                  value="true"
                />Yes</label
              >
              <label
                ><input
                  type="radio"
                  name="relocation"
                  v-model="form.relocation"
                  value="false"
                />No</label
              >
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Application',
    data() {
      return {
        form: {
          name: '',
          age: '',
          city: '',
          skills: [],
          relocation: null
        }
      }
    },
    methods: {
      submitHandler() {
        console.log(this.form)
      }
    }
  }
</script>

<style scoped></style>
