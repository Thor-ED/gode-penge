<template>
  <div id="ex-article-page" class="p-8 px-5 py-5">
    <h1 class="text-5xl font-serif font-bold leading-tight">
      Gode Investerings<br />Nyheder
    </h1>
    <p class="mt-4 text-lg">
      Læs dybdegående analyser om vores investeringer i dag.
    </p>

    <!-- Sorter Button -->
    <div class="flex justify-end my-4">
      <button @click="toggleFilter" class="filter-button">
        Sorter
        <span v-if="!showFilter">▼</span>
        <span v-else>▲</span>
      </button>
    </div>

    <!-- Filter Section -->
    <div v-if="showFilter" class="d-flex align-items-start" style="gap: 20px">
      <input
        v-model="filterText"
        placeholder="Søg titel..."
        class="border border-gray-400 p-2 w-full rounded"
      />
      <div class="flex gap-4">
        <label
          ><input type="checkbox" v-model="articleCheckBox" /> Artikler
        </label>
        <label><input type="checkbox" v-model="blogCheckBox" /> Blogs </label>
      </div>
    </div>

    <!-- Articles and Arrows -->
    <div class="d-flex align-items-start" style="gap: 20px">
      <div
        class="d-flex align-items-start flex-1 overflow-hidden"
        style="gap: 20px"
      >
        <ArticleCard
          v-for="(article, index) in paginatedArticles"
          :key="index"
          :article="article"
        />
      </div>

      <div class="button-column">
        <button @click="nextArticle" class="gothrough-button">›</button>
        <button @click="prevArticle" class="gothrough-button">‹</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from './ArticleCard.vue'

const articles = ref([
  {
    title: 'Investering i Grøn Energi',
    isArticle: true,
    image: 'tmp-image.jpg'
  },
  {
    title: 'Teknologiaktier 2025',
    isArticle: true,
    image: 'tmp-image.jpg'
  },
  {
    title: 'Ejendomsmarkedet i Europa',
    isArticle: false,
    image: 'tmp-image.jpg'
  },
  {
    title: 'Vækst i Asien',
    isArticle: true,
    image: 'tmp-image.jpg'
  }
])

const showFilter = ref(false)
const filterText = ref('')
const articleCheckBox = ref(true)
const blogCheckBox = ref(true)

const currentIndex = ref(0)
let pageSize = 2

const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchText = article.title
      .toLowerCase()
      .includes(filterText.value.toLowerCase())

    let checkboxesValue = true
    if (article.isArticle) {
      checkboxesValue = articleCheckBox.value
    } else {
      checkboxesValue = blogCheckBox.value
    }

    return matchText && checkboxesValue
  })
})

const paginatedArticles = computed(() =>
  filteredArticles.value.slice(
    currentIndex.value,
    currentIndex.value + pageSize
  )
)

function toggleFilter() {
  showFilter.value = !showFilter.value
}

function nextArticle() {
  if (currentIndex.value + pageSize < filteredArticles.value.length) {
    currentIndex.value += 1
  }
}

function prevArticle() {
  if (currentIndex.value - 1 >= 0) {
    currentIndex.value -= 1
  }
}

function calculatePageSize() {
  const width = window.innerWidth

  if (width >= 1200) {
    pageSize = 3 // Large screens
  } else if (width >= 768) {
    pageSize = 2 // Medium screens
  } else {
    pageSize = 1 // Small screens
  }
}

calculatePageSize() // Initial value
window.addEventListener('resize', () => {
  calculatePageSize()
  // Optionally: refresh/re-render articles here
})
</script>

<style>
.filter-button {
  background-color: #0057ff;
  color: white;
  padding: 0.2rem 0.2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  width: auto;
  text-align: center;
}

.button-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* space between buttons */
}

.gothrough-button {
  background-color: #0057ff;
  color: white;
  padding: 0.1rem 0.6rem; /* wide but not tall */
  border: none;
  cursor: pointer;
  font-size: 3rem;
  width: auto; /* remove fixed width */
  line-height: 1; /* tighten vertical space */
  min-width: 60px; /* optional: keeps shape */
  text-align: center;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
