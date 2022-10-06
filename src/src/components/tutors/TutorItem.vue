<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <custom-badge v-for="area in areas" :key="area" class="area" :type="area" :title="area" />
    </div>
    <div class="actions">
      <custom-button mode="outline" link :to="getTutorContactsLink">Contact</custom-button>
      <custom-button link :to="getTutorDetailsLink">View Details</custom-button>
    </div>
  </li>
</template>

<script>
import CustomButton from "@/components/custom/CustomButton";
import CustomBadge from "@/components/custom/CustomBadge";
export default {
  name: 'TutorItem',
  components: {CustomBadge, CustomButton},
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    areas: {
      type: Array,
      required: true,
    },
    hourlyRate: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: true
    },
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    getTutorDetailsLink() {
      return this.$route.path + '/' + this.id
    },
    getTutorContactsLink() {
      return this.$route.path + '/' + this.id + '/contact'
    }
  }
}
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