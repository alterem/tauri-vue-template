<template>
  <div class="flex flex-col items-center h-100vh p-4 text-center text-gray-700 dark:text-gray-300">
    <h2>使用 Pinia 处理 Stores </h2>
    <div class="mt-5">
      <p>Count: {{ counterStore.count }}</p>
      <p>Double Count: {{ counterStore.doubleCount }}</p>
    </div>
    <div class="mt-2">
      <el-button @click="counterStore.increment()">Increment</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
</script>

<style scoped>
</style>