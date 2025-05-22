<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <RouterLink to="/" class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">首页</RouterLink>
          <RouterLink to="/counter" class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">计数器</RouterLink>
          <RouterLink to="/about" class="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">关于</RouterLink>
        </div>
        <div class="flex-shrink-0 ml-auto">
          <button @click="toggleDark()" class="p-2 rounded-md transition-colors duration-200
                   bg-gray-200 hover:bg-gray-300 text-gray-800
                   dark:bg-gray-400 dark:hover:bg-gray-600 dark:text-gray-900">
            <span v-if="isDark">☀️ Light Mode</span>
            <span v-else>🌙 Dark Mode</span>
          </button>
        </div>
      </nav>
    </header>

    <main class="flex-1 overflow-y-auto mt-12 pt-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #3b82f6;
  font-weight: bold;
}
</style>
