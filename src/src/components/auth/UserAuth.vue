<template>
  <div>
    <custom-dialog :show="isError" @close="closeModal" title="An authenticating error occurred!">
      <p>{{ errorMessage }}</p>
    </custom-dialog>
    <custom-card class="wrap">
      <custom-spinner class="spinner" v-if="isLoading"/>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input id="email" type="email" v-model.trim="email" @input="cleanError"/>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input id="password" type="password" v-model.trim="password" @input="cleanError"/>
        </div>
        <p v-if="!isValidForm" class="error">Please check your inputs</p>
        <custom-button type="submit">{{ modeSubmit }}</custom-button>
        <custom-button type="button" mode="flat" @click="switchMode">{{ switchModeSubmit }}</custom-button>
      </form>
    </custom-card>
  </div>
</template>
<script>
import CustomButton from "@/components/custom/CustomButton";
import CustomCard from "@/components/custom/CustomCard";
import CustomDialog from "@/components/custom/CustomDialog";
import CustomSpinner from "@/components/custom/CustomSpinner";

export default {
  name: 'UserAuth',
  components: {CustomSpinner, CustomDialog, CustomCard, CustomButton},
  data() {
    return {
      email: '',
      password: '',
      isValidForm: true,
      mode: 'Login'
    }
  },
  methods: {
    checkValidation() {
      if (this.email === '' || this.password === '' || this.password.length < 6) {
        this.isValidForm = false
      }
    },
    async submitForm() {
      this.checkValidation()
      if (!this.isValidForm) {
        return
      }

      const user = {
        email: this.email,
        password: this.password
      }
      try {
        if (this.mode === 'Signup') {
          await this.$store.dispatch({
            type: 'auth/signUpUser',
            user
          })
        } else {
          await this.$store.dispatch({
            type: 'auth/logIn',
            user
          })
        }
        const redirectPath = this.$route.query.redirect || 'tutors'

        this.$router.replace('/' + redirectPath)
        this.email = ''
        this.password = ''
      }catch (err){
        console.warn(err)
      }
    },
    cleanError() {
      this.isValidForm = true
    },
    switchMode() {
      if (this.mode === 'Login') {
        this.mode = 'Signup'
      } else {
        this.mode = 'Login'
      }
    },
    closeModal() {
      this.$store.commit('auth/updateError', false)
    }
  },
  computed: {
    modeSubmit() {
      if (this.mode === 'Login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeSubmit() {
      if (this.mode === 'Login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    },
    isError() {
      return this.$store.getters['auth/isError']
    },
    errorMessage() {
      return this.$store.getters['auth/errorMessage']
    },
    isLoading() {
      return this.$store.getters['auth/isLoading']
    }
  }
}
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