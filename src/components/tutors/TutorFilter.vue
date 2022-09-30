<template>
  <custom-card>
    <h2>Find Your Tutor</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" :checked="filter.frontend" @change="updateFilter"/>
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" :checked="filter.backend" @change="updateFilter"/>
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" :checked="filter.career" @change="updateFilter"/>
      <label for="career">Career</label>
    </span>
  </custom-card>
</template>


<script>
import CustomCard from "@/components/custom/CustomCard";

export default {
  name: 'TutorFilter',
  emits: ['update-filter'],
  components: {CustomCard},
  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    updateFilter(event) {
      const checkboxId = event.target.id
      const checkboxStatus = event.target.checked

      const newFilter = {
        ...this.filter,
        [checkboxId]: checkboxStatus
      }
      this.filter = newFilter
      this.$emit('update-filter', newFilter)
    }
  }
}
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