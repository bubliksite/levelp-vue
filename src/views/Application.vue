<template>
  <div class="container">
    <h1 class="my-3">Application</h1>
    <form @submit.prevent="submitHandler" @reset.prevent="clearForm">
      <div class="row mb-4">
        <div class="col-md-4">
          <label for="name">Your name <span class="text-danger">*</span></label>
          <input
            :class="{'is-invalid': errors.name}"
            class="form-control"
            type="text"
            id="name"
            placeholder="Enter name"
            v-model="form.name"
          />
          <span class="invalid-feedback">{{ errors.name }}</span>
        </div>
        <div class="col-md-4">
          <label for="age">Your age <span class="text-danger">*</span></label>
          <input
            class="form-control"
            :class="{'is-invalid': errors.age}"
            type="number"
            id="age"
            placeholder="Enter age"
            v-model="form.age"
          />
          <span class="invalid-feedback">{{ errors.age }}</span>
        </div>
        <div class="col-md-4">
          <label for="city">Your city <span class="text-danger">*</span></label>
          <select
            class="form-select"
            id="city"
            v-model="form.city"
            :class="{'is-invalid': errors.city}"
          >
            <option selected disabled value="none">Choose the city...</option>
            <option value="moscow">Moscow</option>
            <option value="petersburg">St.Petersburg</option>
            <option value="helsinki">Helsinki</option>
            <option value="stockholm">Stockholm</option>
          </select>
          <span class="invalid-feedback">{{ errors.city }}</span>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-4">
          <p class="mb-1">Vue skills</p>
          <div class="form-check">
            <input
              class="form-check-input"
              value="VueJS"
              id="VueJS"
              v-model="form.skills"
              type="checkbox"
            />
            <label for="VueJS" class="form-check-label">VueJS</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              value="Vue Router"
              id="Vue Router"
              v-model="form.skills"
              type="checkbox"
            />
            <label for="Vue Router" class="form-check-label">
              Vue Router
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              value="Vuex"
              id="Vuex"
              v-model="form.skills"
              type="checkbox"
            />
            <label for="Vuex" class="form-check-label"> Vuex </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              value="Vue CLI"
              id="Vue CLI"
              v-model="form.skills"
              type="checkbox"
            />
            <label for="Vue CLI" class="form-check-label"> Vue CLI </label>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-1">
            Do you ready for relocation? <span class="text-danger">*</span>
          </p>
          <div class="form-check">
            <input
              :class="{'is-invalid': errors.relocation}"
              class="form-check-input"
              type="radio"
              name="relocation"
              v-model="form.relocation"
              value="true"
              id="relocation_true"
            />
            <label class="form-check-label" for="relocation_true">Yes</label>
          </div>
          <div class="form-check">
            <input
              :class="{'is-invalid': errors.relocation}"
              class="form-check-input"
              type="radio"
              name="relocation"
              id="relocation_false"
              v-model="form.relocation"
              value="false"
            />
            <label class="form-check-label" for="relocation_false">No</label>
            <div class="invalid-feedback">{{ errors.relocation }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <p class="mb-1">
            Agreement of personal data <span class="text-danger">*</span>
          </p>
          <div class="form-check">
            <input
              :class="{'is-invalid': errors.relocation}"
              class="form-check-input"
              value="Agreement"
              id="Agreement"
              v-model="form.agreement"
              type="checkbox"
            />
            <label for="Agreement" class="form-check-label"> I agree </label>
            <div class="invalid-feedback">{{ errors.agreement }}</div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary me-2" type="submit">Submit</button>
      <button class="btn btn-danger" type="reset">Reset</button>
    </form>
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
            this.errors[key] = 'Fill the field'
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
