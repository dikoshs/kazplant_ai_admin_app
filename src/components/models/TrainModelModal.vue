<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 class="text-xl font-semibold text-green-800 mb-4">Обучить модель</h2>

        <div>
          <label class="block text-sm font-medium text-green-600 mb-1" for="epoch">
            Количество эпох
          </label>
          <input
            id="epoch"
            v-model.number="epoch"
            type="number"
            min="1"
            step="1"
            placeholder="Введите количество эпох"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            @input="validateEpoch"
          />
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium text-green-600 mb-1" for="batch">
            Размер батча
          </label>
          <input
            id="batch"
            v-model.number="batch"
            type="number"
            min="1"
            step="1"
            placeholder="Введите размер батча"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            @input="validateBatch"
          />
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium text-green-600 mb-1" for="nameModel">
            Название модели (необязательно)
          </label>
          <input
            id="nameModel"
            v-model="nameModel"
            type="text"
            placeholder="Введите название модели"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>

        <div class="mt-6 flex justify-end space-x-3">
          <button
            @click="close"
            class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
          >
            Закрыть
          </button>
          <button
            @click="confirm"
            :disabled="!isValid"
            class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none disabled:opacity-50"
          >
            ОК
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue';

// Props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits(['update:visible', 'create']);

// Reactive state
const epoch = ref(null);
const batch = ref(null);
const nameModel = ref('');
const error = ref('');

// Validation
const validateEpoch = () => {
  if (!Number.isInteger(epoch.value) || epoch.value <= 0) {
    error.value = 'Количество эпох должно быть целым числом больше 0';
  } else {
    error.value = '';
  }
};

const validateBatch = () => {
  if (!Number.isInteger(batch.value) || batch.value <= 0) {
    error.value = 'Размер батча должен быть целым числом больше 0';
  } else {
    error.value = '';
  }
};

const isValid = computed(() => {
  const valid = Number.isInteger(epoch.value) && epoch.value > 0 && Number.isInteger(batch.value) && batch.value > 0;
  console.log('isValid:', valid, { epoch: epoch.value, batch: batch.value, nameModel: nameModel.value });
  return valid;
});

// Methods
const close = () => {
  console.log('Closing TrainModelModal');
  emit('update:visible', false);
  epoch.value = null;
  batch.value = null;
  nameModel.value = '';
  error.value = '';
};

const confirm = () => {
  if (isValid.value) {
    const payload = {
      epoch: epoch.value,
      batch: batch.value,
      name_model: nameModel.value.trim() || undefined,
    };
    console.log('Confirming, emitting create event with:', payload);
    emit('create', payload);
    close();
  } else {
    error.value = 'Заполните обязательные поля (эпохи и батч должны быть целыми числами > 0)';
    console.log('Validation failed');
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>