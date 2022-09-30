<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}" >
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" @input="clearValid('firstName')"/>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" @input="clearValid('lastName')"/>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea rows="5" id="description" v-model.trim="description.val" @input="clearValid('description')"></textarea>
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @input="clearValid('rate')"/>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}" @change="clearValid('areas')">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val"/>
        <labe for="fronted">Frontend Development</labe>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val"/>
        <labe for="backend">Backend Development</labe>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val"/>
        <labe for="fronted">Career Development</labe>
      </div>
    </div>
    <p v-if="!isValidForm" class="invalid">Please double check all the fields before submit</p>
    <custom-button>Register</custom-button>
  </form>
</template>

<script>
import CustomButton from "@/components/custom/CustomButton";

export default {
  name: 'TutorForm',
  components: {CustomButton},
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      isValidForm: true
    }
  },
  methods: {
    submitForm() {
      this.checkValidation()
      if (!this.isValidForm) {
        return
      }
      const newTutor = {
        id: new Date().toISOString(),
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        hourlyRate: this.rate.val,
        areas: this.areas.val
      }
      this.$store.dispatch({
        type: "tutors/addTutorAction",
        newTutor
      })
      this.$router.replace('/tutors')
    },
    checkValidation() {
      if (this.firstName.val === '') {
        this.isValidForm = false
        this.firstName.isValid = false
      }
      if (this.lastName.val === '') {
        this.isValidForm = false
        this.lastName.isValid = false
      }
      if (this.description.val === '') {
        this.isValidForm = false
        this.description.isValid = false
      }
      if (this.rate.val <= 0) {
        this.isValidForm = false
        this.rate.isValid = false
      }
      if (this.areas.val.length === 0) {
        this.isValidForm = false
        this.areas.isValid = false
      }
    },
    clearValid(property){
      this[property].isValid = true
      this.isValidForm = true
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label, .invalid {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>