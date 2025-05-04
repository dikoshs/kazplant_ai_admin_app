<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 class="text-xl font-semibold mb-4">Загрузить фотографии</h2>

        <div>
          <label class="block text-sm font-medium mb-1" for="plantId">
            Выберите растение
          </label>
          <select
            id="plantId"
            v-model="ai_plant_id"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            :disabled="isLoadingPlants"
          >
            <option value="" disabled>Выберите растение</option>
            <option v-for="plant in plants" :key="plant.id" :value="plant.id">
              {{ plant.name }}
            </option>
          </select>
          <div v-if="isLoadingPlants" class="text-sm text-gray-500 mt-1">Загрузка растений...</div>
        </div>

        <div class="mt-4">
          <label class="block text-sm font-medium mb-1" for="files">
            Загрузите фотографии
          </label>
          <input
            id="files"
            type="file"
            multiple
            accept="image/*"
            @change="handleFileChange"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div v-if="files.length" class="mt-2 text-sm text-gray-600">
          Выбрано файлов: {{ files.length }}
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
            :disabled="!isValid || isLoadingPlants"
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
import { ref, computed, onMounted } from 'vue';
import { useDatasetStore } from '../../stores/dataset.js';

// Props
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  datasetTypes: {
    type: Array,
    default: () => [],
    required: true,
  },
});

// Emits
const emit = defineEmits(['update:visible', 'create']);

// Reactive state
const ai_plant_id = ref('');
const files = ref([]);
const ai_type_id = ref(null);
const error = ref('');
const isLoadingPlants = ref(false);

// Store
const datasetStore = useDatasetStore();
const plants = ref([]);

// Initialize data
onMounted(async () => {
  console.log('DatasetModal mounted, visible:', props.visible, 'datasetTypes:', props.datasetTypes);
  isLoadingPlants.value = true;
  try {
    plants.value = await datasetStore.fetchPlants();
    console.log('Plants loaded:', plants.value);
    validateAndSetTypes(props.datasetTypes);
  } catch (err) {
    error.value = 'Ошибка при загрузке данных';
    console.error('onMounted error:', err);
  } finally {
    isLoadingPlants.value = false;
  }
});

// Validate and set ai_type_id
const validateAndSetTypes = (types) => {
  console.log('validateAndSetTypes:', types);
  if (!Array.isArray(types) || types.length < 2) {
    error.value = 'Неверный формат datasetTypes';
    console.error('Invalid datasetTypes:', types);
    return;
  }

  const [, dataset] = types; // Ignore first element (classification/segmentation)
  const validDatasets = ['train', 'valid'];

  if (!validDatasets.includes(dataset)) {
    error.value = 'Недопустимое значение datasetTypes';
    console.error('Invalid dataset type:', dataset);
    return;
  }

  // Map dataset to ai_type_id
  ai_type_id.value = dataset === 'train' ? 1 : 2; // train: 1, valid: 2
  console.log('Set ai_type_id:', ai_type_id.value);
};

// Handle file input change
const handleFileChange = (event) => {
  const selectedFiles = Array.from(event.target.files);
  console.log('Files selected:', selectedFiles.map(f => f.name));
  if (selectedFiles.length === 0) {
    error.value = 'Выберите хотя бы один файл';
  } else {
    error.value = '';
    files.value = selectedFiles;
  }
};

// Validation for the confirm button
const isValid = computed(() => {
  const valid = ai_plant_id.value && files.value.length > 0 && ai_type_id.value;
  console.log('isValid:', valid, {
    ai_plant_id: ai_plant_id.value,
    files: files.value.length,
    ai_type_id: ai_type_id.value,
  });
  return valid;
});

// Methods
const close = () => {
  console.log('Closing modal');
  emit('update:visible', false);
  ai_plant_id.value = '';
  files.value = [];
  error.value = '';
};

const confirm = async () => {
  if (isValid.value) {
    console.log('Confirming, emitting create event with:', {
      ai_plant_id: ai_plant_id.value,
      ai_type_id: ai_type_id.value,
      files: files.value.map(f => f.name),
    });
    emit('create', {
      ai_plant_id: ai_plant_id.value,
      ai_type_id: ai_type_id.value,
      files: files.value,
    });
    close();
  } else {
    error.value = 'Заполните все обязательные поля';
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