<template>
<section>Tutors</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Tutor</router-link>
    </div>
    <ul v-if="hasTutor">
      <li v-for="tutor in tutors" :key="tutor.id"> {{ tutor.firstName}} </li>
    </ul>
    <div v-else>There is not any tutors</div>
  </section>

</template>

<script>
export default {
computed: {
  tutors() {
    return this.$store.getters['tutors/tutors']
  },
  hasTutor(){
    return this.$store.getters['tutors/hasTutor']
  }
}
}
</script>