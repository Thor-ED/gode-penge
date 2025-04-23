<template>
  <nav class="navbar-light bg-light navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="GP_Logo_hjemmeside.png" id="logo-image" class="img-fluid" />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/front">Front</a>
        </li> -->
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click.prevent="scrollToTarget('ex-article-page')"
            >Artikler</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click.prevent="scrollToTarget('ex-podcast-page')"
            >Podcasts</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            @click.prevent="scrollToTarget('ex-contact-page')"
            >Kontakt</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { nextTick } from 'vue'

export default {
  setup() {
    const scrollToTarget = idTarget => {
      // Wait a tick to ensure the DOM is updated
      nextTick(() => {
        const el = document.getElementById(idTarget)
        if (el) {
          // Scroll manually if VueScrollTo is failing
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          console.warn('Podcast element not found yet, retrying…')
          // Retry after delay in case DOM is not mounted yet
          setTimeout(() => {
            const retryEl = document.getElementById(idTarget)
            if (retryEl) {
              retryEl.scrollIntoView({ behavior: 'smooth' })
            } else {
              console.error('Still cannot find #idTarget')
            }
          }, 300)
        }
      })
    }

    return { scrollToTarget }
  }
}
</script>

<style>
#logo-image {
  width: 60px;
  height: auto;
}
</style>
