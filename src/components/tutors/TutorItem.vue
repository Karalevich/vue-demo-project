<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <custom-badge v-for='area in areas' :key='area' class='area' :type='area' :title='area' />
    </div>
    <div class='actions'>
      <custom-button mode='outline' link :to='getTutorContactsLink'>Contact</custom-button>
      <custom-button link :to='getTutorDetailsLink'>View Details</custom-button>
    </div>
  </li>
</template>

<script setup lang='ts'>
import CustomButton from '@/components/custom/CustomButton.vue'
import CustomBadge from '@/components/custom/CustomBadge.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export type TTutorItemProps = {
  firstName: string
  lastName: string
  areas: Array<string>
  hourlyRate: number
  id: string
}

const props = defineProps<TTutorItemProps>()

const route = useRoute()


const fullName = computed(() => {
  return props.firstName + ' ' + props.lastName
})
const getTutorDetailsLink = computed(() => {
  return route.path + '/' + props.id
})
const getTutorContactsLink = computed(() => {
  return route.path + '/' + props.id + '/contact'
})


</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.area {
  margin-right: 5px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>