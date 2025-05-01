<template>
    <div class="w-full h-full flex">
      <div class="flex-1 overflow-auto p-8">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-extrabold text-green-900">ResNet-50</h1>
            <button
                class="bg-[#224C36] hover:bg-green-800 text-white px-7 py-1 rounded-full"
            >
                Обучить
            </button>
        </div>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div class="text-sm font-medium text-green-600">Inference/min</div>
            <div class="mt-2 text-2xl font-bold text-green-900">{{ stats.inference_per_min }}</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div class="text-sm font-medium text-green-600">Epochs</div>
            <div class="mt-2 text-2xl font-bold text-green-900">{{ stats.training_epochs }}</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div class="text-sm font-medium text-green-600">GPU Usage</div>
            <div class="mt-2 text-2xl font-bold text-green-900">{{ stats.gpu_usage }}</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div class="text-sm font-medium text-green-600">Memory</div>
            <div class="mt-2 text-2xl font-bold text-green-900">{{ stats.memory }}</div>
          </div>
        </div>
  
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div class="lg:col-span-1 bg-white rounded-2xl p-6 shadow-lg">
            <h2 class="text-2xl font-semibold text-green-800 mb-4">{{ model.name }}</h2>
            <dl class="space-y-2">
              <div class="flex justify-between">
                <dt class="text-sm text-green-600">Version</dt>
                <dd class="font-medium text-green-900">{{ model.version }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-green-600">Created</dt>
                <dd class="font-medium text-green-900">{{ model.created_at }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-green-600">Accuracy</dt>
                <dd class="font-medium text-green-900">{{ model.accuracy }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-sm text-green-600">Parameters</dt>
                <dd class="font-medium text-green-900">{{ formattedParams }}</dd>
              </div>
              <div class="pt-4">
                <span
                  class="inline-block px-3 py-1 text-sm font-semibold rounded-full"
                  :class="model.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-200 text-gray-600'"
                >
                  {{ model.status }}
                </span>
              </div>
            </dl>
            <p class="mt-4 text-green-700 italic">{{ model.description }}</p>
          </div>
  
          <!-- Placeholder для графика (подключи Chart.js или Vue Chart) -->
          <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg flex flex-col">
            <h2 class="text-xl font-semibold text-green-800 mb-4">Training vs Validation Loss</h2>
            <div class="flex-1">
              <!-- сюда можно вставить <canvas id="lossChart"> -->
              <div class="w-full h-64 bg-green-50 border-dashed border-2 border-green-200 rounded-lg flex items-center justify-center text-green-300">
                Здесь будет график 📈
              </div>
            </div>
          </div>
        </div>
  
        <!-- Список задач -->
        <div class="bg-white rounded-2xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold text-green-800 mb-4">Pipeline Tasks</h2>
          <ul class="space-y-4">
            <li
              v-for="task in tasks"
              :key="task.title"
              class="flex justify-between items-center"
            >
              <span class="text-green-700">{{ task.title }}</span>
              <div class="w-1/2 bg-green-100 rounded-full overflow-hidden h-3 mx-4">
                <div
                  class="h-full bg-green-600"
                  :style="{ width: `${task.progress}%` }"
                ></div>
              </div>
              <span class="text-sm font-medium text-green-900">{{ task.progress }}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import data from '../../assets/model_data.json';
  
  const model = ref({});
  const stats = ref({});
  const performance = ref([]);
  const tasks = ref([]);
  
  const formattedParams = computed(() =>
    model.value.parameters?.toLocaleString()
  );
  
  onMounted(async () => {
    const data = {
    "model": {
      "name": "StreetSceneNet",
      "version": "1.0.0",
      "created_at": "2025-04-20",
      "status": "Active",
      "accuracy": "94.8%",
      "parameters": 84500000,
      "description": "Нейросеть, распознающая городские объекты на 3D-рендерах улиц."
    },
    "stats": {
      "inference_per_min": 125,
      "training_epochs": 48,
      "gpu_usage": "76%",
      "memory": "12.3 GB"
    },
    "performance": [
      { "month": "Jan", "loss": 0.95, "val_loss": 1.10 },
      { "month": "Feb", "loss": 0.80, "val_loss": 0.92 },
      { "month": "Mar", "loss": 0.65, "val_loss": 0.75 },
      { "month": "Apr", "loss": 0.50, "val_loss": 0.60 },
      { "month": "May", "loss": 0.40, "val_loss": 0.55 },
      { "month": "Jun", "loss": 0.35, "val_loss": 0.50 }
    ],
    "tasks": [
      { "title": "Подготовить датасет", "progress": 100 },
      { "title": "Тренировка модели", "progress": 85 },
      { "title": "Валидация результатов", "progress": 60 },
      { "title": "Деплой на сервер", "progress": 0 }
    ]
  }
  ;
    model.value = data.model;
    stats.value = data.stats;
    performance.value = data.performance;
    tasks.value = data.tasks;
  });
  </script>
  