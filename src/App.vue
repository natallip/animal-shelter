<template lang="pug">
  .app
    TheHeader
    router-view
    TheFooter
</template>

<script>
import TheHeader from './components/Header/Header.vue'
import TheFooter from './components/Footer/Footer.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  created () {
    this.$store.dispatch('loadPets')
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss">
.app {
  display: flex;
}
</style>
