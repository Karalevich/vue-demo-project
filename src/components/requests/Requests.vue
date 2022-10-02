<template>
  <custom-dialog :show="isError" @close="closeModal" title="An error occurred!">
    <p>{{ errorMessage }}</p>
  </custom-dialog>
  <section>
    <custom-card>
      <header>
        <h2>Here you see requests</h2>
      </header>
      <custom-spinner v-if="isLoading"/>
      <ul v-else-if="hasRequests">
        <request-item v-for="request in requests" :key="request.id" :email="request.email" :message="request.message"/>
      </ul>
      <h3 v-else>You have received any requests yet!</h3>
    </custom-card>
  </section>

</template>

<script>
import CustomCard from "@/components/custom/CustomCard";
import RequestItem from "@/components/requests/RequestItem";
import CustomSpinner from "@/components/custom/CustomSpinner";
import CustomDialog from "@/components/custom/CustomDialog";

export default {
  name: 'Requests',
  components: {CustomDialog, CustomSpinner, RequestItem, CustomCard},
  created() {
    this.$store.dispatch('requests/setRequestsAction')
  },
  computed: {
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    },
    requests() {
      return this.$store.getters['requests/requests']
    },
    isLoading() {
      return this.$store.getters['requests/isLoading']
    },
    isError() {
      return this.$store.getters['requests/isError']
    },
    errorMessage() {
      return this.$store.getters['requests/errorMessage']
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('requests/updateError', false)
    }
  }
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
