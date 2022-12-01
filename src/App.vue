<script>
import { ref } from "vue";


export default {
  setup() {
    function scrollToTop() {
      window.scrollTo(0,0);
    };

    return {
      scrollToTop,
    };
  },
}
</script>

<template>
<div class="relative">
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <div class="fixed bottom-8 right-8">
    <a @click="scrollToTop()">
      <div class="btn border-white w-12 h-12 p-2 rounded-full bg-white shadow-lg flex justify-center items-center hover:bg-teal-400 hover:border-teal-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </div>
    </a>
  </div>
</div>

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;500;900&display=swap");

:root {
  font-family: 'Noto Serif TC', sans-serif;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.scale-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>