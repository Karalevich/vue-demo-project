<template>
  <custom-card>
    <section>
      <tutor-filter @update-filter="updateTutors"/>
    </section>
    <section>
      <div class="controls">
        <custom-button mode="outline">Refresh</custom-button>
        <custom-button link to="/register">Register as a Tutor</custom-button>
      </div>
      <ul v-if="hasTutor">
        <tutor-item v-for="tutor in tutors" :key="tutor.id" :id="tutor.id" :first-name="tutor.firstName"
                    :last-name="tutor.lastName" :areas="tutor.areas" :hourly-rate="tutor.hourlyRate"/>
      </ul>
      <div v-else>There is not any tutors</div>
    </section>
  </custom-card>
</template>

<script>
import TutorItem from "@/components/tutors/TutorItem";
import CustomCard from "@/components/custom/CustomCard";
import CustomButton from "@/components/custom/CustomButton";
import TutorFilter from "@/components/tutors/TutorFilter";

export default {
  components: {TutorFilter, CustomButton, CustomCard, TutorItem},
  mounted() {
    this.tutors = this.$store.getters['tutors/tutors']
    this.$store.dispatch('tutors/setTutorAction')
  },
  computed: {
    hasTutor() {
      return this.$store.getters['tutors/hasTutors']
    },
    tutors() {
      return this.$store.getters['tutors/tutors']
    }
  },
  methods: {
    updateTutors(filters) {
      this.$store.dispatch({
        type: "tutors/updateTutorsAction",
        filters
      })
    }
  }
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