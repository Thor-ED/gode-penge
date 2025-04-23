<template>
  <div class="container">
    <div class="content">
      <div class="text-section">
        <h1 class="headline">
          Investeringer<span class="tooltip-icon">?</span><br />
          skal gøre godt.
        </h1>
      </div>

      <div class="button-section">
        <button class="cta-button">“Artikler”</button>
        <button class="cta-button">“Podcast”</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: white;
  font-family: 'Georgia', serif;
}

.content {
  display: flex;
  align-items: center;
  gap: 10rem; /* Space between text and buttons */
}

.text-section {
  text-align: left;
}

.headline {
  font-size: 3rem;
  color: black;
  font-weight: normal;
  line-height: 1.3;
  position: relative;
}

.tooltip-icon {
  display: inline-block;
  margin-left: 0.25rem;
  background-color: #0057ff;
  color: white;
  border-radius: 50%;
  padding: 0.1em 0.5em;
  font-size: 1rem;
  vertical-align: top;
  cursor: pointer;
}

.button-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-button {
  background-color: #0057ff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  width: 200px;
  text-align: center;
}
</style>
