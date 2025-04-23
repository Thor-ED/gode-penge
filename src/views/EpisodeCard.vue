<template>
  <div class="d-flex flex-row gap-3">
    <img :src="episode.image" alt="Episode image" class="episode-image" />
    <div>
      <h6 class="text-uppercase fw-bold">Episode {{ episode.number }}</h6>
      <h5 class="fw-bold">{{ episode.title }}</h5>
      <p class="text-muted">{{ episode.description }}</p>
      <div class="d-flex gap-2">
        <div v-for="n in 3" :key="n" class="episode-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  episode: Object
})
</script>

<style scoped>
.episode-image {
  width: 160px;
  height: 90px;
  object-fit: cover;
  border-radius: 4px;
}

.episode-indicator {
  width: 20px;
  height: 20px;
  background-color: #222;
}
</style>
