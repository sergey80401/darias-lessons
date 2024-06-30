<script setup lang="ts">
import SlideCollection from "./components/SlideCollection.vue";
import img from "./assets/1.jpg";
</script>

<template>
  <div class="container">
    <SlideCollection />
  </div>
</template>

<style scoped>

.container {
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
