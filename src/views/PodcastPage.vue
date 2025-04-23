<template>
  <div id="ex-podcast-page" class="podcast-section px-5 py-5">
    <h1 class="display-4 title">God investeringspodcast</h1>
    <div class="d-flex flex-column flex-md-row gap-5 mt-4">
      <!-- Left: Latest Episode -->
      <div class="flex-shrink-0 latest-episode">
        <h6 class="text-uppercase fw-bold">Latest Episode</h6>
        <h4 class="fw-bold">Being your authentic self</h4>
        <p class="text-muted">
          What's up with this episode? Curious listeners want to know, so go
          ahead and give them a rundown here.
        </p>
      </div>

      <!-- Right: Scrollable Episodes -->
      <div class="episode-scroll-container">
        <div class="d-flex flex-column gap-4">
          <EpisodeCard
            v-for="episode in episodes"
            :key="episode.number"
            :episode="episode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const episodes = [
  {
    number: 37,
    title: 'Finding your purpose',
    description:
      "What's up with this episode? Curious listeners want to know, so go ahead and give them a rundown here.",
    image: 'tmp-image.jpg'
  },
  {
    number: 36,
    title: 'Making a change for the better',
    description:
      "What's up with this episode? Curious listeners want to know, so go ahead and give them a short and sweet episode rundown here.",
    image: 'tmp-image.jpg'
  },
  {
    number: 35,
    title: 'Making a change for the better',
    description:
      "What's up with this episode? Curious listeners want to know, so go ahead and give them a short and sweet episode rundown here.",
    image: 'tmp-image.jpg'
  },
  {
    number: 34,
    title: 'Making a change for the better',
    description:
      "What's up with this episode? Curious listeners want to know, so go ahead and give them a short and sweet episode rundown here.",
    image: 'tmp-image.jpg'
  }
  // Add more as needed
]
</script>

<script>
import EpisodeCard from './EpisodeCard.vue'

export default {
  components: {
    EpisodeCard
  }
}
</script>

<style scoped>
.podcast-section {
  background-color: #f8f8f8;
}

.title {
  font-family: 'Georgia', serif;
  font-weight: 500;
}

.episode-scroll-container {
  max-height: 250px; /* Adjust this value to your liking */
  overflow-x: auto;
  padding-bottom: 10px;
  max-width: 100%;
}

.episode-list {
  min-width: max-content;
}

#ex-podcast-page {
  overflow-x: hidden;
  width: 100%;
}
</style>
