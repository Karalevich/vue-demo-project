<template>
  <form @submit.prevent='submitForm'>
    <div class='form-control' :class='{invalid: !firstName.isValid}'>
      <label for='firstname'>Firstname</label>
      <input type='text' id='firstname' v-model.trim='firstName.val' @input="clearValid(firstName)" />
    </div>
    <div class='form-control' :class='{invalid: !lastName.isValid}'>
      <label for='lastname'>Lastname</label>
      <input type='text' id='lastname' v-model.trim='lastName.val' @input="clearValid(lastName)" />
    </div>
    <div class='form-control' :class='{invalid: !description.isValid}'>
      <label for='description'>Description</label>
      <textarea rows='5' id='description' v-model.trim='description.val' @input="clearValid(description)"></textarea>
    </div>
    <div class='form-control' :class='{invalid: !rate.isValid}'>
      <label for='rate'>Hourly Rate</label>
      <input type='number' id='rate' v-model.number='rate.val' @input="clearValid(rate)" />
    </div>
    <div class='form-control' :class='{invalid: !areas.isValid}' @change="clearValid(areas)">
      <h3>Areas of Expertise</h3>
      <div>
        <input type='checkbox' id='frontend' value='frontend' v-model='areas.val' />
        <label for='fronted'>Frontend Development</label>
      </div>
      <div>
        <input type='checkbox' id='backend' value='backend' v-model='areas.val' />
        <label for='backend'>Backend Development</label>
      </div>
      <div>
        <input type='checkbox' id='career' value='career' v-model='areas.val' />
        <label for='fronted'>Career Development</label>
      </div>
    </div>
    <p v-if='!isValidForm' class='invalid'>Please double check all the fields before submit</p>
    <custom-button>Register</custom-button>
  </form>
</template>

<script setup lang='ts'>
import CustomButton from '@/components/custom/CustomButton.vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

type TField<D> = {
  val: D,
  isValid: boolean
}
const firstName = reactive<TField<string>>({
  val: '',
  isValid: true
})
const lastName = reactive<TField<string>>({
  val: '',
  isValid: true
})
const description = reactive<TField<string>>({
  val: '',
  isValid: true
})
const rate = reactive<TField<number | null>>({
  val: null,
  isValid: true
})
const areas = reactive<TField<Array<string>>>({
  val: [],
  isValid: true
})
const isValidForm = ref(true)

function submitForm() {
  checkValidation()
  if (!isValidForm.value) {
    return
  }
  const newTutor = {
    id: store.getters['auth/getUserId'],
    firstName: firstName.val,
    lastName: lastName.val,
    description: description.val,
    hourlyRate: rate.val,
    areas: areas.val
  }
  store.dispatch({
    type: 'tutors/addTutorAction',
    newTutor
  })
  router.replace('/tutors')
}

function checkValidation() {
  if (firstName.val === '') {
    isValidForm.value = false
    firstName.isValid = false
  }
  if (lastName.val === '') {
    isValidForm.value = false
    lastName.isValid = false
  }
  if (description.val === '') {
    isValidForm.value = false
    description.isValid = false
  }
  if (rate.val <= 0) {
    isValidForm.value = false
    rate.isValid = false
  }
  if (areas.val.length === 0) {
    isValidForm.value = false
    areas.isValid = false
  }
}

function clearValid(property) {
  property.isValid = true
  isValidForm.value = true
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