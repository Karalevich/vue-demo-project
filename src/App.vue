<template>
  <custom-header></custom-header>
  <router-view v-slot='slotProps'>
    <transition name='route' mode='out-in'>
      <component :is='slotProps.Component' />
    </transition>
  </router-view>
</template>

<script setup lang='ts'>

import { useStore } from 'vuex'
import CustomHeader from '@/components/custom/CustomHeader.vue'

const store = useStore()

store.dispatch('auth/checkExistUser', 'logIn')
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.route-leave-to {
  transform: translateY(30px);
  opacity: 0;
}


.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-enter-to, .route-leave-from {
  transform: translateY(0px);
  opacity: 1;
}
</style>