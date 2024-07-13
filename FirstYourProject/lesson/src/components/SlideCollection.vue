<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import { plainToClass } from "class-transformer";
import Slide from "./Slide.vue";
import backNext from "@/assets/backNext.png";
import { Post } from "@/models";
import lesson1 from "@/data/lesson1";
const current = ref<number>(1);
const posts = ref<Post[]>();

onBeforeMount(() => {
  posts.value = JSON.parse(JSON.stringify(lesson1, null, 2));
});
const imageUrl = computed(
  () => new URL(posts.value[current.value - 1].imagePath, import.meta.url).href
);
const backClick = () => {
  if (current.value > 1) current.value--;
};

const nextClick = () => {
    console.log(123)
  if (current.value < posts.value.length) current.value++;
};
</script>
<template>
  <div class="container">
    <div class="back" @click="backClick">
      <img :src="backNext" />
    </div>
    <Slide
      :index="current"
      :title="posts[current - 1].title"
      :imagePath="imageUrl"
      :text="posts[current - 1].text"
    />
    <div class="next" @click="nextClick">
      <img :src="backNext" style="transform: rotate(180deg)" />
    </div>
  </div>
</template>
<style scoped>
img {
  width: 64px;
  height: 64px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
}

.back {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.back:hover {
  transform: scale(1.2) translateX(-15px);
}

.next {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.next:hover {
  transform: scale(1.2) translateX(15px);
}
</style>
