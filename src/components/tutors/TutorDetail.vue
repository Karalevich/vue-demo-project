<template>
  <section>
    <article>
      <custom-card>
        <h3>{{ fullName }}</h3>
        <h4>${{ hourlyRate }}/hour</h4>
      </custom-card>
    </article>
    <article>
      <custom-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <custom-button link :to='contactLink'>Contact</custom-button>
        </header>
        <router-view></router-view>
      </custom-card>
    </article>
    <article>
      <custom-card>
        <custom-badge v-for='area in areas' :key='area' class='area' :type='area' :title='area' />
        <p>{{ description }}</p>
      </custom-card>
    </article>
  </section>
</template>

<script setup lang='ts'>
import CustomCard from '@/components/custom/CustomCard.vue'
import CustomButton from '@/components/custom/CustomButton.vue'
import CustomBadge from '@/components/custom/CustomBadge.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

type TTutor = {
  description: string,
  areas: Array<string>,
  firstName: string
  lastName: string,
  hourlyRate: string
}

const store = useStore()
const route = useRoute()

const selectedTutor = ref<TTutor | null>(null)
selectedTutor.value = store.getters['tutors/tutors'].find(tutor => tutor.id === route.params.id)


const contactLink = computed(() => {
  return route.path + '/' + route.params.id + '/contact'
})
const description = computed(() => {
  return selectedTutor.value?.description
})
const areas = computed(() => {
  return selectedTutor.value?.areas
})
const fullName = computed(() => {
  return selectedTutor.value?.firstName + ' ' + selectedTutor.value?.lastName
})
const hourlyRate = computed(() => {
  return selectedTutor.value?.hourlyRate
})
</script>