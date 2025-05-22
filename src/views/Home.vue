<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from "@tauri-apps/api/core";
import { NInput, NButton } from 'naive-ui';
import { isEmpty } from 'lodash-es'
import { useDebounceFn } from '@vueuse/core';

const message = ref('Hello Tauri + Vue + Naive UI + Tailwind!');
const name = ref('Alterem');

const greet = useDebounceFn(async () => {
  if (!isEmpty(name.value)) {
    message.value = await invoke('greet', { name: name.value });
  }
}, 300);
</script>

<template>
  <div class="flex flex-col items-center h-100vh p-4 text-center">
    <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ message }}</h2>
    <div class="flex items-center justify-center space-x-6 mb-6">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300"
          alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#42b883aa] transition-all duration-300"
          alt="Vue logo" />
      </a>
      <a href="https://tauri.app/" target="_blank">
        <img src="/tauri.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#24c8dbaa] transition-all duration-300"
          alt="Tauri logo" />
      </a>
      <a href="https://www.naiveui.com/" target="_blank"
        class="flex items-center justify-center h-24 w-24 text-2xl font-bold text-blue-500 hover:drop-shadow-[0_0_2em_#409EFFaa] transition-all duration-300">
        <img src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg"
          class="h-24 w-24 hover:drop-shadow-[0_0_2em_#24c8dbaa] transition-all duration-300" alt="Naive ui logo" />
      </a>
    </div>

    <p class="mb-8 text-gray-700 dark:text-gray-300">Click the Tauri logo to learn more.</p>
    <n-input v-model:value="name" style="width: 240px" placeholder="Please input" clearable />
    <div class="mt-4">
      <n-button dashed type="primary" @click="greet">
        Greet from Tauri Backend
      </n-button>
    </div>

    <p class="mt-8 text-sm text-gray-600">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank" class="text-blue-600 hover:underline">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" class="text-blue-600 hover:underline">Volar</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        class="text-blue-600 hover:underline">rust-analyzer</a>
    </p>
  </div>
</template>

<style scoped></style>
