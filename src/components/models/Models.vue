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
    type: "classification",
    lastTrain: '2025-05-25',
    classes: 38,
    top1: '0.9516',
    epochs: 30,
  },
  {
    id: 2,
    name: 'InceptionV3',
    type: "classification",
    lastTrain: '2025-05-24',
    classes: 38,
    top1: '0.0224',
    epochs: 30,
  },
  {
    id: 3,
    name: 'VGG-19',
    type: "classification",
    lastTrain: '2025-05-24',
    classes: 38,
    top1: '0.6119',
    epochs: 30,
  },
  {
    id: 4,
    name: 'DeeplabV3 + ResNet-50',
    type: "segmentation",
    lastTrain: '2025-05-24',
    iou: '0.63',
    dice: '0.63',
    epochs: 30,
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
