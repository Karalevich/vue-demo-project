<template>
  <div>
    <custom-dialog :show='isError' @close='closeModal' title='An authenticating error occurred!'>
      <p>{{ errorMessage }}</p>
    </custom-dialog>
    <custom-card class='wrap'>
      <custom-spinner class='spinner' v-if='isLoading' />
      <form @submit.prevent='submitForm'>
        <div class='form-control'>
          <label for='email'>E-Mail</label>
          <input id='email' type='email' v-model.trim='email' @input='cleanError' />
        </div>
        <div class='form-control'>
          <label for='password'>Password</label>
          <input id='password' type='password' v-model.trim='password' @input='cleanError' />
        </div>
        <p v-if='!isValidForm' class='error'>Please check your inputs</p>
        <custom-button type='submit'>{{ modeSubmit }}</custom-button>
        <custom-button type='button' mode='flat' @click='switchMode'>{{ switchModeSubmit }}</custom-button>
      </form>
    </custom-card>
  </div>
</template>
<script setup lang='ts'>
import CustomButton from '@/components/custom/CustomButton.vue'
import CustomCard from '@/components/custom/CustomCard.vue'
import CustomDialog from '@/components/custom/CustomDialog.vue'
import CustomSpinner from '@/components/custom/CustomSpinner.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const email = ref('')
const password = ref('')
const isValidForm = ref(true)
const mode = ref('Login')

function checkValidation() {
  if (email.value === '' || password.value === '' || password.value.length < 6) {
    isValidForm.value = false
  }
}

async function submitForm() {
  checkValidation()
  if (!isValidForm.value) {
    return
  }

  const user = {
    email: email.value,
    password: password.value
  }
  try {
    if (mode.value === 'Signup') {
      await store.dispatch({
        type: 'auth/signUpUser',
        user
      })
    } else {
      await store.dispatch({
        type: 'auth/logIn',
        user
      })
    }
    const redirectPath = route.query.redirect || 'tutors'

    await router.replace('/' + redirectPath)
    email.value = ''
    password.value = ''
  } catch (err) {
    console.warn(err)
  }
}

function cleanError() {
  isValidForm.value = true
}

function switchMode() {
  if (mode.value === 'Login') {
    mode.value = 'Signup'
  } else {
    mode.value = 'Login'
  }
}

function closeModal() {
  store.commit('auth/updateError', false)
}

const modeSubmit = computed(() => {
  if (mode.value === 'Login') {
    return 'Login'
  } else {
    return 'Signup'
  }
})
const switchModeSubmit = computed(() => {
  if (mode.value === 'Login') {
    return 'Signup instead'
  } else {
    return 'Login instead'
  }
})
const isError = computed(() => {
  return store.getters['auth/isError']
})
const errorMessage = computed(() => {
  return store.getters['auth/errorMessage']
})
const isLoading = computed(() => {
  return store.getters['auth/isLoading']
})
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.error {
  color: red;
  margin: 10px 0;
}

.wrap {
  position: relative;
}

.spinner {
  position: absolute;
  top: calc(50% - 40px);
}
</style>