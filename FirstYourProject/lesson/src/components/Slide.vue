<script setup lang="ts">
const props = defineProps<{
  index: number;
  title: string;
  imagePath: string;
  text: string;
}>();
</script>

<template>
  <div class="post">
    <div class="title">
      <span class="index">{{ index }}</span>
      <h2>{{ title }}</h2>
    </div>
    <div class="postBody">
      <img :src="props.imagePath" class="postImage" />
      <textarea class="postText">{{ props.text }}</textarea>
    </div>
  </div>
</template>

<style scoped>
.index {
  background-color: #ffffff;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  display: flex;
  align-items: center;
  gap: 20px;
  /* margin-left: 16px */
}
.post {
  padding: 1rem;
  border-radius: 1rem;
  background-color: #99ccff;
  height: fit-content;
  max-height: 900px;
  max-width: 1400px;
  width: 100%;
}
.postBody {
  display: flex;
  flex-direction: row;
  gap: 32px;
  height: 80%;
  align-items: center;
}

.postImage {  
  object-fit: cover;
  max-height: auto;
  max-width: auto;
  width: 45%;
}

.postText {
  width: 45%;
  resize: none;
  height: 600px;
}
</style>
