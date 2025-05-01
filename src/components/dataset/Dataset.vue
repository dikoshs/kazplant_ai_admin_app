<template>
    <div class="grid grid-cols-5 gap-6 p-6">
        <div
        class="relative bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-100"
        @click="handleAdd"
        >
            <span class="text-4xl font-bold text-gray-700 select-none">+</span>
        </div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative bg-white rounded-2xl shadow-md overflow-hidden"
      >
        <img
          :src="item.image"
          alt="Card Image"
          class="w-full h-48 object-cover"
        />
        <div class="absolute top-2 left-2 bg-white p-2 rounded-full">
          <v-icon name="ri-plant-fill" />
        </div>
  
        <div class="text-center p-4">
          <h3 class="text-green-800 text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-[#224C36] text-xl font-medium mt-1">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
<script>

import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { RiPlantFill } from 'oh-vue-icons/icons/ri'

addIcons(RiPlantFill)  

  export default {
    data() {
      return {
        items: [
          { title: "Potato Late Bright", price: "2258 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Tomato Red", price: "1500 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Onion Gold", price: "1200 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Carrot Orange", price: "1800 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Cucumber Green", price: "1400 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Radish White", price: "1100 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Garlic Strong", price: "2000 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Spinach Fresh", price: "900 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Pepper Hot", price: "2500 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
          { title: "Lettuce Crisp", price: "1300 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
        ],
      };
    },
    methods: {
        async handleAdd() {
            if (window.ok && window.ok.performClick) {
                window.ok.performClick();
            } else {
                console.log("performClick not available");
            }
        },
    },
  };
</script>
