<template>
  <custom-card>
    <h2>Find Your Tutor</h2>
    <span class='filter-option'>
      <input type='checkbox' id='frontend' :checked='filter.frontend' @change='updateFilter' />
      <label for='frontend'>Frontend</label>
    </span>
    <span class='filter-option'>
      <input type='checkbox' id='backend' :checked='filter.backend' @change='updateFilter' />
      <label for='backend'>Backend</label>
    </span>
    <span class='filter-option'>
      <input type='checkbox' id='career' :checked='filter.career' @change='updateFilter' />
      <label for='career'>Career</label>
    </span>
  </custom-card>
</template>


<script setup lang='ts'>
import CustomCard from '@/components/custom/CustomCard.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()


function updateFilter(event: InputEvent) {
  const { id } = event.target
  const { checked } = event.target

  store.commit('tutors/updateFilter',
    {
      filterId: id,
      filterStatus: checked
    })
  store.dispatch('tutors/updateTutorsAction')
}


const filter = computed(() => {
  return store.getters['tutors/filter']
})
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>