<template>
  <custom-card>
    <custom-dialog :show="isError" @close="closeModal" title="An error occurred!">
      <p>{{ errorMessage }}</p>
    </custom-dialog>
    <section>
      <tutor-filter @update-filter="updateTutors"/>
    </section>
    <section>
      <div class="controls">
        <custom-button link to="/register">Register as a Tutor</custom-button>
      </div>
      <custom-spinner v-if="isLoading" />
      <ul v-else-if="hasTutor">
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
import CustomSpinner from "@/components/custom/CustomSpinner";
import CustomDialog from "@/components/custom/CustomDialog";

export default {
  components: {CustomDialog, CustomSpinner, TutorFilter, CustomButton, CustomCard, TutorItem},
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
    },
    isLoading() {
      return this.$store.getters['tutors/isLoading']
    },
    isError() {
      return this.$store.getters['tutors/isError']
    },
    errorMessage() {
      return this.$store.getters['tutors/errorMessage']
    }
  },
  methods: {
    updateTutors(filters) {
      this.$store.dispatch({
        type: "tutors/updateTutorsAction",
        filters
      })
    },
    closeModal() {
      this.$store.commit('tutors/updateError', false)
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