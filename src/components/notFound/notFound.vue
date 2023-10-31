<template>
  <section>
    <custom-card>
      <h2>Page not found</h2>
      <p>
        This page not be found - maybe check out all our
        <router-link to='/tutors'>tutors</router-link>
      </p>
    </custom-card>
  </section>
</template>
<script setup lang='ts'>
import CustomCard from '@/components/custom/CustomCard.vue'

</script>