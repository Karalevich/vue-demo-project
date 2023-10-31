<template>
  <section>
    <custom-dialog :show='isError' @close='closeModal' title='An error occurred!'>
      <p>{{ errorMessage }}</p>
    </custom-dialog>
    <article>
      <custom-card>
        <header>
          <h2>Here you see requests</h2>
        </header>
        <custom-spinner v-if='isLoading' />
        <ul v-else-if='hasRequests'>
          <request-item v-for='request in requests' :key='request.id' :email='request.email'
                        :message='request.message' />
        </ul>
        <h3 v-else>You have received any requests yet!</h3>
      </custom-card>
    </article>
  </section>
</template>

<script setup lang='ts'>
import CustomCard from '@/components/custom/CustomCard.vue'
import RequestItem from '@/components/requests/RequestItem.vue'
import CustomSpinner from '@/components/custom/CustomSpinner.vue'
import CustomDialog from '@/components/custom/CustomDialog.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
store.dispatch('requests/setRequestsAction')


const hasRequests = computed(() => {
  return store.getters['requests/hasRequests']
})
const requests = computed(() => {
  return store.getters['requests/requests']
})
const isLoading = computed(() => {
  return store.getters['requests/isLoading']
})
const isError = computed(() => {
  return store.getters['requests/isError']
})
const errorMessage = computed(() => {
  return store.getters['requests/errorMessage']
})

function closeModal() {
  store.commit('requests/updateError', false)
}

</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
