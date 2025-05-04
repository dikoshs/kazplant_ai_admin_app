<template>
    <div class="min-h-screen">
      <header class="border-b border-[#224C36] py-4">
        <div class="container mx-auto px-6 flex justify-between items-center">
          <h1 class="text-2xl font-semibold text-[#224C36]">Управление моделями CNN</h1>
          <button
            @click="addModel"
            class="bg-[#224C36] hover:bg-green-800 text-white font-medium px-4 py-2 rounded-lg"
          >
            Добавить модель
          </button>
        </div>
      </header>
  
      <main class="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModelCard
          v-for="model in models"
          :key="model.id"
          :model="model"
          @delete="deleteModel"
        />
      </main>
  
    </div>
  </template>
  
<script setup>
import { reactive, onMounted } from 'vue'
import ModelCard from './ModelCard.vue'
import { useModelStore } from '../../stores/model'

const modelStore = useModelStore();

const models = reactive([
  {
    id: 1,
    name: 'ResNet-50',
    lastTrain: '2025-04-25',
    params: '25.6 млн',
    classes: 1000,
    top1: '76.2%',
    epochs: 90,
  },
  {
    id: 2,
    name: 'EfficientNet-B0',
    lastTrain: '2025-04-20',
    params: '5.3 млн',
    classes: 1000,
    top1: '77.1%',
    epochs: 350,
  },
])

function addModel() {
  alert('Добавление новой модели')
}

function deleteModel(id) {
  const index = models.findIndex(m => m.id === id)
  if (index !== -1) models.splice(index, 1)
}

onMounted(async () => {
  const modelsInfo = await modelStore.fetchModels();

  if (Array.isArray(modelsInfo)) {
    models.splice(0, models.length, ...modelsInfo);
  }
});

</script>
