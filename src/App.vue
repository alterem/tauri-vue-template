<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from "@tauri-apps/api/core";
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const message = ref('Hello Tauri + Vue + Element Plus + Tailwind!');
const name = ref('Alterem')
const greet = async () => {
  message.value = await invoke('greet', { name: name.value })
}

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    <button @click="toggleDark()" class="p-2 rounded-md mb-4 transition-colors duration-200
             bg-gray-200 hover:bg-gray-300 text-gray-800
             dark:bg-gray-400 dark:hover:bg-gray-600 dark:text-gray-900">
      <span v-if="isDark">☀️ Light Mode</span>
      <span v-else>🌙 Dark Mode</span>
    </button>

    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{{ message }}</h1>

    <div class="flex items-center justify-center space-x-6 mb-6">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300"
          alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#42b883aa] transition-all duration-300"
          alt="Vue logo" />
      </a>
      <a href="https://tauri.app/" target="_blank">
        <img src="/tauri.svg" class="h-24 w-24 hover:drop-shadow-[0_0_2em_#24c8dbaa] transition-all duration-300"
          alt="Tauri logo" />
      </a>
      <a href="https://element-plus.org/" target="_blank"
        class="flex items-center justify-center h-24 w-24 text-2xl font-bold text-blue-500 hover:drop-shadow-[0_0_2em_#409EFFaa] transition-all duration-300">
        <img src="https://element-plus.org/images/element-plus-logo.svg"
          class="h-24 w-24 hover:drop-shadow-[0_0_2em_#24c8dbaa] transition-all duration-300" alt="Element Plus logo" />
      </a>
    </div>

    <p class="mb-8 text-gray-700 dark:text-gray-300">Click the Tauri logo to learn more.</p>
    <el-input v-model="name" style="width: 240px" placeholder="Please input" clearable />
    <el-button type="primary" @click="greet" class="mt-4">
      Greet from Tauri Backend
    </el-button>

    <p class="mt-8 text-sm text-gray-600">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank" class="text-blue-600 hover:underline">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" class="text-blue-600 hover:underline">Volar</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        class="text-blue-600 hover:underline">rust-analyzer</a>
    </p>
    <p class="mt-t">
    <a href="https://github.com/alterem/tauri-vue-template" target="_blank" class="mx-2 text-blue-600 hover:underline">
      tauri-vue-template
    </a>
    <a href="https://github.com/alterem" target="_blank" class="mx-2 text-blue-600 hover:underline">
      Alterem
    </a>
    </p>
  </div>
</template>

<style scoped></style>
