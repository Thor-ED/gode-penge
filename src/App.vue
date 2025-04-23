<template>
  <navbar></navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
