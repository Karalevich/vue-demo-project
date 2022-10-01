<template>
  <section>
    <custom-card>
      <header>
        <h2>Here you see requests</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item v-for="request in requests" :key="request.id" :email="request.email" :message="request.message"/>
      </ul>
      <h3 v-else>You have received any requests yet!</h3>
    </custom-card>
  </section>

</template>

<script>
import CustomCard from "@/components/custom/CustomCard";
import RequestItem from "@/components/requests/RequestItem";

export default {
  components: {RequestItem, CustomCard},
  computed: {
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    },
    requests() {
      return this.$store.getters['requests/requests']
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
