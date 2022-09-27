<template>
  <custom-header></custom-header>
  <router-view></router-view>
</template>

<script>
import CustomHeader from "@/components/custom/CustomHeader";
export default {
  name: 'App',
  components: {CustomHeader}
}
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
</style>