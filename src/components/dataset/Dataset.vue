<template>
  <div class="pb-5">
    <div class="pl-5 text-3xl font-medium">
      Classification
    </div>
    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">
        Train
      </div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide
            v-for="(item, index) in items" :key="index"
          >
            <div class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="item.image" alt="Card Image" class="w-full h-48 object-cover" />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z" />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">{{ item.price }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div @click="DatasetAdd(['classification','train'])"
          class="mt-5 shrink-0 p-3 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2.8">
              <path d="M5 12h14">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
              </path>
              <path d="M12 5v14">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">
        Valid
      </div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide
            v-for="(item, index) in items" :key="index"
          >
            <div class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="item.image" alt="Card Image" class="w-full h-48 object-cover" />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z" />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">{{ item.price }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div @click="DatasetAdd(['classification','valid'])"
          class="mt-5 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2.8">
              <path d="M5 12h14">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
              </path>
              <path d="M12 5v14">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
              </path>
            </g>
          </svg>
        </div>
    
      </div>
    </div>
  </div>



  <div class="pb-5 pt-5">
    <div class="pl-5 text-3xl font-medium">
      Segmentation
    </div>
    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">
        Train
      </div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide
            v-for="(item, index) in items" :key="index"
          >
            <div class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="item.image" alt="Card Image" class="w-full h-48 object-cover" />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z" />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">{{ item.price }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div @click="DatasetAdd(['segmentation','train'])"
          class="mt-5 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2.8">
              <path d="M5 12h14">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
              </path>
              <path d="M12 5v14">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="space-y-6 p-6">
      <div class="text-3xl font-medium">
        Valid
      </div>
      <div class="relative">
        <Carousel v-bind="config" class="relative">
          <Slide
            v-for="(item, index) in items" :key="index"
          >
            <div class="w-60 sm:w-48 md:w-56 lg:w-64 shrink-0 bg-white rounded-2xl shadow-md overflow-hidden">
              <img :src="item.image" alt="Card Image" class="w-full h-48 object-cover" />
              <div class="absolute -top-2 -left-2 bg-white p-2 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M20.998 3v2a7 7 0 0 1-7 7h-1v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-3a7 7 0 0 1 7-7zm-15.5-1a7.49 7.49 0 0 1 6.124 3.169A7.96 7.96 0 0 0 9.998 10v1h-.5a7.5 7.5 0 0 1-7.5-7.5V2z" />
                </svg>
              </div>
              <div class="text-center p-4">
                <h3 class="text-green-800 text-lg font-semibold">{{ item.title }}</h3>
                <p class="text-[#224C36] text-xl font-medium mt-1">{{ item.price }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <div @click="DatasetAdd(['segmentation','valid'])"
          class="mt-5 shrink-0 p-3 flex items-center justify-center bg-white rounded-2xl shadow-md cursor-pointer hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2.8">
              <path d="M5 12h14">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
              </path>
              <path d="M12 5v14">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
              </path>
            </g>
          </svg>
        </div>
        <DatasetModal v-if="showDatasetModal" v-model:visible="showDatasetModal"
        :datasetTypes="this.class" @create="handleDatasetCreate" />
      </div>
    </div>
  </div>




</template>

<script>
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { RiPlantFill } from 'oh-vue-icons/icons/ri'
import DatasetModal from './DatasetModal.vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

addIcons(RiPlantFill)

export default {
  components: {
    'v-icon': OhVueIcon,
    DatasetModal,
    Carousel, 
    Slide, 
    Navigation,
  },
  data() {
    return {
      items: [
        { title: "Potato Late Bright", price: "2258 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
        { title: "Tomato Red", price: "1500 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
        { title: "Onion Gold", price: "1200 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
        { title: "Carrot Orange", price: "1800 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
        { title: "Cucumber Green", price: "1400 classes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdZLGiBLNaYwcPTJYANB48jYGQE2r1H85gQ&s" },
      ],
      showNav: { left: false, right: true },
      class: [],
      showDatasetModal: false,
      modalTags: [],
      config: {
        wrapAround: false,
        height: 300,
        itemsToShow: 3,
        snapAlign: 'start',
        gap: 10,
        breakpoints: { 640: { itemsToShow: 2 }, 1024: { itemsToShow: 3 } }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateNav()
      this.$refs.scrollContainer.addEventListener('scroll', this.updateNav)
    })
  },
  methods: {
    scroll(direction) {
      const el = this.$refs.scrollContainer
      const shift = el.clientWidth * 0.8
      el.scrollBy({ left: direction === 'left' ? -shift : shift, behavior: 'smooth' })
    },
    // updateNav() {
    //   const el = this.$refs.scrollContainer
    //   this.showNav.left = el.scrollLeft > 10
    //   this.showNav.right = el.scrollWidth - el.clientWidth - el.scrollLeft > 10
    // },
    updateNav() {
      const el = this.$refs.scrollContainer;
      this.showNav.left = el.scrollLeft > 10;
      this.showNav.right = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
    },
    scrollLeft() {
      const el = this.$refs.scrollContainer;
      el.scrollBy({ left: -300, behavior: 'smooth' });
    },
    scrollRight() {
      const el = this.$refs.scrollContainer;
      el.scrollBy({ left: 300, behavior: 'smooth' });
    },
    DatasetAdd(type) {
      this.class = type
      this.showDatasetModal = true;
    },
    handleDatasetCreate(payload) {
      debugger
      console.log('Создан датасет:', payload);
      this.showDatasetModal = false;
    },
  }
}
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
  --vc-nav-background: rgba(255,255,255,0.8);
  --vc-nav-border-radius: 50%;
}
</style>