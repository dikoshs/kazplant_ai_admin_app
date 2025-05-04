<template>
    <div class="flex min-h-screen bg-gray-100">
      <aside class="w-64 bg-[#3B7254] text-white shadow-lg flex-shrink-0">
        <div class="p-6 text-center text-2xl font-medium border-b border-[#2F6342]">
            KazPlant AI
        </div>
        <nav class="px-4 py-6 flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/1482523598/ru/%D1%84%D0%BE%D1%82%D0%BE/3x4-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%B0-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%BB%D0%B0-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85.jpg?s=612x612&w=0&k=20&c=8nRb2M-k4-96xeaEzY2QjLrjmU-fmxlL2LVQUY7qQQk="
            alt="Avatar"
            class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-6"
          />

          <div class="text-lg font-medium">
            Bibity Babity Boom
          </div>
          <div class="mt-4 w-full space-y-2">
            <RouterLink
              v-for="item in menuItems"
              :key="item.name"
              :to="item.to"
              class="flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-200 text-lg font-medium"
              :class="{
                'bg-[#2F6342] text-[#E3FFD1] border-r-4 border-[#E3FFD1]': $route.path === item.to,
                'text-white hover:bg-[#325A3E]': $route.path !== item.to
              }"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </nav>
      </aside>
    </div>
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  
  const menuItems = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Dataset', to: '/dataset' },
    { name: 'Models', to: '/models' },
    { name: 'Settings', to: '/settings' },
  ]
  </script>
  
  <style scoped>
  </style>