<template>
  <div class="w-full h-full flex">
    <div class="flex-1 overflow-auto p-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-extrabold text-green-900">ResNet-50</h1>
        <button
          @click="openTrainModal"
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

        <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg flex flex-col">
          <h2 class="text-xl font-semibold text-green-800 mb-4">Training vs Validation Loss</h2>
          <div class="flex-1">
            <div class="w-full h-64 bg-green-50 border-dashed border-2 border-green-200 rounded-lg flex items-center justify-center text-green-300">
              Здесь будет график 📈
            </div>
          </div>
        </div>
      </div>

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

      <TrainModelModal
        v-if="showTrainModal"
        v-model:visible="showTrainModal"
        @create="handleTrainModel"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TrainModelModal from './TrainModelModal.vue';
import data from '../../assets/model_data.json';
import { useModelStore } from '../../stores/model';

const datasetStore = useModelStore();
const model = ref({});
const stats = ref({});
const performance = ref([]);
const tasks = ref([]);
const showTrainModal = ref(false);
const error = ref('');

const formattedParams = computed(() =>
  model.value.parameters?.toLocaleString()
);

onMounted(async () => {
  model.value = data.model;
  stats.value = data.stats;
  performance.value = data.performance;
  tasks.value = data.tasks;
});

const openTrainModal = () => {
  console.log('Opening TrainModelModal');
  setTimeout(() => {
    showTrainModal.value = true;
  }, 0);
};

const handleTrainModel = async (payload) => {
  console.log('Received train model payload:', payload);
  error.value = '';
  try {
    const result = await datasetStore.trainModel(payload);
    if (result.success) {
      console.log('Model training started:', result.message);
      // Optionally update tasks or model data
      tasks.value = tasks.value.map(task =>
        task.title === 'Тренировка модели' ? { ...task, progress: 10 } : task
      );
    } else {
      error.value = result.error;
      console.error('Training failed:', result.error);
    }
  } catch (err) {
    error.value = 'Ошибка при запуске обучения';
    console.error('handleTrainModel error:', err);
  }
  showTrainModal.value = false;
};
</script>