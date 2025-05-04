<template>
  <div class="pb-5">
    <div class="pl-5 text-3xl font-medium">Classification</div>
    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">Train</div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide v-for="(item, index) in trainItems" :key="index">
            <div
              class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                :src="'http://127.0.0.1:8000/new_plant/classification/New Plant Diseases Dataset(Augmented)/'+ item.random_photo"
                alt="Card Image"
                class="w-full h-48 object-cover"
              />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
                  />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">
                  {{ item.plant_name }}
                </h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">
                  {{ item.total_photos }} photos
                </p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div
          @click="DatasetAdd(['classification', 'train'])"
          class="mt-5 shrink-0 p-3 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="16"
              stroke-dashoffset="16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.8"
            >
              <path d="M5 12h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
              <path d="M12 5v14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">Valid</div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide v-for="(item, index) in validItems" :key="index">
            <div
              class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                :src="'http://127.0.0.1:8000/new_plant/classification/New Plant Diseases Dataset(Augmented)/'+ item.random_photo"
                alt="Card Image"
                class="w-full h-48 object-cover"
              />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
                  />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">
                  {{ item.plant_name }}
                </h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">
                  {{ item.total_photos }} photos
                </p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div
          @click="DatasetAdd(['classification', 'valid'])"
          class="mt-5 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="16"
              stroke-dashoffset="16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.8"
            >
              <path d="M5 12h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
              <path d="M12 5v14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div class="pb-5 pt-5">
    <div class="pl-5 text-3xl font-medium">Segmentation</div>
    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">Train</div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide v-for="(item, index) in trainItems" :key="index">
            <div
              class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                :src="'http://127.0.0.1:8000/new_plant/classification/New Plant Diseases Dataset(Augmented)/'+ item.random_photo"
                alt="Card Image"
                class="w-full h-48 object-cover"
              />
              <div class="absolute z-50 -top-2 -left-2 bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
                  />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">
                  {{ item.plant_name }}
                </h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">
                  {{ item.total_photos }} photos
                </p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div
          @click="DatasetAdd(['segmentation', 'train'])"
          class="mt-5 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="16"
              stroke-dashoffset="16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.8"
            >
              <path d="M5 12h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
              <path d="M12 5v14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">Valid</div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide v-for="(item, index) in validItems" :key="index">
            <div
              class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                :src="'http://127.0.0.1:8000/new_plant/classification/New Plant Diseases Dataset(Augmented)/'+ item.random_photo"
                alt="Card Image"
                class="w-full h-48 object-cover"
              />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z"
                  />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">
                  {{ item.plant_name }}
                </h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">
                  {{ item.total_photos }} photos
                </p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div
          @click="DatasetAdd(['segmentation', 'valid'])"
          class="mt-5 shrink-0 p-3 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-dasharray="16"
              stroke-dashoffset="16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.8"
            >
              <path d="M5 12h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
              <path d="M12 5v14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.4s"
                  values="16;0"
                />
              </path>
            </g>
          </svg>
        </div>
        <DatasetModal
          v-if="showDatasetModal"
          v-model:visible="showDatasetModal"
          :datasetTypes="classType"
          @create="handleDatasetCreate"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { addIcons, OhVueIcon } from 'oh-vue-icons';
import { RiPlantFill } from 'oh-vue-icons/icons/ri';
import DatasetModal from './DatasetModal.vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useDatasetStore } from '../../stores/dataset.js';

addIcons(RiPlantFill);

const datasetStore = useDatasetStore();
const items = ref([]);
const showNav = ref({ left: false, right: true });
const classType = ref([]);
const showDatasetModal = ref(false);
const config = ref({
  wrapAround: false,
  height: 300,
  itemsToShow: 3,
  snapAlign: 'start',
  gap: 10,
  breakpoints: { 640: { itemsToShow: 2 }, 1024: { itemsToShow: 4 } },
});

// Computed properties to filter items for train and valid sections
const trainItems = computed(() =>
  items.value.filter((item) => item.random_photo?.startsWith('train/'))
);
const validItems = computed(() =>
  items.value.filter((item) => item.random_photo?.startsWith('valid/'))
);

const updateNav = () => {
  const el = document.querySelector('.carousel');
  if (el) {
    showNav.value.left = el.scrollLeft > 10;
    showNav.value.right = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
  }
};

const scrollLeft = () => {
  const el = document.querySelector('.carousel');
  if (el) el.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  const el = document.querySelector('.carousel');
  if (el) el.scrollBy({ left: 300, behavior: 'smooth' });
};

const DatasetAdd = (type) => {
  classType.value = type;
  showDatasetModal.value = true;
};

const handleDatasetCreate = async (payload) => {
  console.log('Received create payload:', payload);
  const { ai_plant_id, ai_type_id, files } = payload;
  try {
    const result = await datasetStore.uploadPhotos({
      ai_plant_id,
      ai_type_id,
      files,
    });
    if (result.success) {
      console.log('Photos uploaded:', result.photo_count, result.saved_paths);
      const datasetInfo = await datasetStore.allDatasetInfo();
      if (datasetInfo.product_results) {
        console.log('Dataset info updated:', datasetInfo.product_results);
      }
    } else {
      console.error('Upload failed:', result.error);
    }
  } catch (error) {
    console.error('handleDatasetCreate error:', error);
  }
  showDatasetModal.value = false;
};

onMounted(async () => {
  const datasetInfo = await datasetStore.allDatasetInfo();
  if (datasetInfo.product_results) {
    items.value = datasetInfo.product_results;
  }

  const scrollContainer = document.querySelector('.carousel');
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', updateNav);
    updateNav();
  }
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.8);
  --vc-nav-border-radius: 50%;
}
</style>