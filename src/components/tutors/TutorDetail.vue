<template>
  <section>
    <custom-card>
      <h3>{{ fullName }}</h3>
      <h4>${{ hourlyRate }}/hour</h4>
    </custom-card>
  </section>
  <section>
    <custom-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <custom-button link :to="contactLink">Contact</custom-button>
      </header>
      <router-view></router-view>
    </custom-card>
  </section>
  <section>
    <custom-card>
      <custom-badge v-for="area in areas" :key="area" class="area" :type="area" :title="area"/>
      <p>{{ description }}</p>
    </custom-card>
  </section>
</template>

<script>
import CustomCard from "@/components/custom/CustomCard";
import CustomButton from "@/components/custom/CustomButton";
import CustomBadge from "@/components/custom/CustomBadge";


export default {
  name: 'TutorDetail',
  components: {CustomBadge, CustomButton, CustomCard},
  props: ['id'],
  data() {
    return {
      selectedTutor: null
    }
  },
  created() {
    this.selectedTutor = this.$store.getters['tutors/tutors'].find(tutor => tutor.id === this.id)
  },
  computed: {
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact'
    },
    description() {
      return this.selectedTutor.description
    },
    areas() {
      return this.selectedTutor.areas
    },
    fullName() {
      return this.selectedTutor.firstName + ' ' + this.selectedTutor.lastName
    },
    hourlyRate() {
      return this.selectedTutor.hourlyRate
    }
  }
}
</script>