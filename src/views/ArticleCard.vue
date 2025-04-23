<template>
  <div>
    <img
      :src="article.image"
      alt="Article Image"
      id="img-dimension"
      class="w-full h-48 object-cover rounded"
    />
    <p class="italic mt-2">{{ article.isArticle ? 'Artikle' : 'Blog' }}</p>
    <p class="font-bold">{{ article.title }}</p>
    <a href="#" class="text-blue-600 underline">Læs mere</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  article: Object
})
</script>

<style>
#img-dimension {
  width: 400px;
  height: auto;
}
</style>
