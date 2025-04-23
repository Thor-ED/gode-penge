<template>
  <div class="container-fluid m-0 p-0">
    <FrontPage></FrontPage>

    <ArticlePage></ArticlePage>

    <PodcastPage></PodcastPage>

    <ContactPage></ContactPage>
  </div>
</template>

<script>
import FrontPage from './FrontPage.vue'
import ArticlePage from './ArticlePage.vue'
import PodcastPage from './PodcastPage.vue'
import ContactPage from './ContactPage.vue'

export default {
  components: {
    FrontPage,
    ArticlePage,
    PodcastPage,
    ContactPage
  }
}
</script>
