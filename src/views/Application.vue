<template>
  <div class="container">
    <h1 class="my-3">Application</h1>
    <hr />
    <div class="card__body body">
      <form
        class="card__form form"
        @submit.prevent="submitHandler"
        @reset.prevent="clearForm"
      >
        <div class="form__input">
          <label for="name">Your name <span>*</span></label>
          <input
            :class="{invalid: errors.name}"
            type="text"
            id="name"
            placeholder="Enter name"
            v-model="form.name"
          />
          <span class="error">{{ errors.name }}</span>
        </div>
        <div class="form__input">
          <label for="age">Your age <span>*</span></label>
          <input
            :class="{invalid: errors.age}"
            type="number"
            id="age"
            placeholder="Enter age"
            v-model="form.age"
          />
          <span class="error">{{ errors.age }}</span>
        </div>
        <div class="form__input">
          <label for="city">Your city <span>*</span></label>
          <select id="city" v-model="form.city" :class="{invalid: errors.city}">
            <option selected disabled value="none">Choose the city...</option>
            <option value="moscow">Moscow</option>
            <option value="petersburg">St.Petersburg</option>
            <option value="helsinki">Helsinki</option>
            <option value="stockholm">Stockholm</option>
          </select>
          <span class="error">{{ errors.city }}</span>
        </div>
        <div class="form__group">
          <div class="form__checkbox">
            <span class="label">Vue skills</span>
            <label>
              <input value="VueJS" v-model="form.skills" type="checkbox" />
              VueJS
            </label>
            <label>
              <input value="Vue Router" v-model="form.skills" type="checkbox" />
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
            <span class="label" :class="{invalid: errors.relocation}"
              >Do you ready for relocation? <span>*</span></span
            >
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
            <span class="error">{{ errors.relocation }}</span>
          </div>
        </div>
        <div class="form__group">
          <div class="form__checkbox">
            <span class="label" :class="{invalid: errors.agreement}"
              >Agreement of personal data <span>*</span></span
            >
            <label>
              <input value="VueJS" v-model="form.agreement" type="checkbox" />
              I agree
            </label>
            <span class="error">{{ errors.agreement }}</span>
          </div>
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
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
          relocation: null,
          agreement: false
        },
        errors: {
          name: null,
          age: null,
          city: null,
          relocation: null,
          agreement: null
        }
      }
    },
    methods: {
      validationForm() {
        let fullValidation = true
        for (let key in this.errors) {
          if (!this.form[key]) {
            this.errors[key] = 'Field id require'
            fullValidation = false
          } else {
            this.errors[key] = null
          }
        }
        return fullValidation
      },
      clearForm() {
        for (let key in this.form) {
          if (key !== 'skills') {
            this.form[key] = null
          }
          this.errors[key] = null
        }
      },
      submitHandler() {
        if (this.validationForm()) {
          console.log(this.form)
        } else {
          console.error('Validation Errors. Please check all fields')
        }
      }
    }
  }
</script>

<style scoped></style>
