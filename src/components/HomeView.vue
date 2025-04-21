<template>
  <div>
    Hello Home

    <button class="btn btn-primary" @click.prevent="goToFrontPage">
      Go to frontPage
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToFrontPage() {
  router.push({ path: '/front' })
}
</script>

<script>
import Navbar from './Navbar.vue'

export default {
  Navbar
}
</script>
