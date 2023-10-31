<template>
  <custom-card>
    <custom-dialog :show='isError' @close='closeModal' title='An error occurred!'>
      <p>{{ errorMessage }}</p>
    </custom-dialog>
    <section>
      <tutor-filter />
    </section>
    <section>
      <div class='controls'>
        <custom-button v-if='isAuth' link to='/register'>Register as a Tutor</custom-button>
        <custom-button v-if='isSignIn' link to='/auth?redirect=register'>Login to Register as Tutor</custom-button>
      </div>
      <custom-spinner v-if='isLoading' />
      <ul v-else-if='hasTutor'>
        <tutor-item v-for='tutor in tutors' :key='tutor.id' :id='tutor.id' :first-name='tutor.firstName'
                    :last-name='tutor.lastName' :areas='tutor.areas' :hourly-rate='tutor.hourlyRate' />
      </ul>
      <div v-else>There is not any tutors</div>
    </section>
  </custom-card>
</template>

<script setup lang='ts'>
import TutorItem from '@/components/tutors/TutorItem.vue'
import CustomCard from '@/components/custom/CustomCard.vue'
import CustomButton from '@/components/custom/CustomButton.vue'
import TutorFilter from '@/components/tutors/TutorFilter.vue'
import CustomSpinner from '@/components/custom/CustomSpinner.vue'
import CustomDialog from '@/components/custom/CustomDialog.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
store.dispatch('tutors/setTutorAction')

const hasTutor = computed(() => {
  return store.getters['tutors/hasTutors']
})

const tutors = computed(() => {
  return store.getters['tutors/tutors']
})

const isLoading = computed(() => {
  return store.getters['tutors/isLoading']
})
const isError = computed(() => {
  return store.getters['tutors/isError']
})
const errorMessage = computed(() => {
  return store.getters['tutors/errorMessage']
})
const isAuth = computed(() => {
  return !store.getters['tutors/isTutor'] && store.getters['auth/isSignIn']
})
const isSignIn = computed(() => {
  return !store.getters['auth/isSignIn']
})

function closeModal() {
  store.commit('tutors/updateError', false)
}

</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>