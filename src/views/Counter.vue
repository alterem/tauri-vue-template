<template>
  <div class="flex flex-col items-center h-100vh p-4 text-center">
    <h2 class="text-gray-900 dark:text-white text-2xl font-bold mb-4">使用 Pinia 处理 Stores</h2>
    <div class="mt-5">
      <p class="text-gray-800 dark:text-gray-200 mb-2">Count: {{ counterStore.count }}</p>
      <p class="text-gray-800 dark:text-gray-200">Double Count: {{ counterStore.doubleCount }}</p>
    </div>
    <div class="mt-4">
      <n-button @click="counterStore.increment()" type="primary">Increment</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { NButton } from 'naive-ui';

const counterStore = useCounterStore();
</script>

<style scoped>
/* 如果需要额外的样式覆盖，可以在这里添加 */
</style>
