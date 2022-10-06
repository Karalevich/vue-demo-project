<template>
  <custom-card>
    <h3>Fill in the inputs to register!</h3>
    <tutor-form></tutor-form>
  </custom-card>
</template>
<script>

import TutorForm from "@/components/form/TutorForm";
import CustomCard from "@/components/custom/CustomCard";

export default {
  components: {CustomCard, TutorForm}
}
</script>