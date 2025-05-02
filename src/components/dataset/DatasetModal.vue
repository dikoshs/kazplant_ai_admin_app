<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        <h2 class="text-xl font-semibold mb-4">Создать новый датасет</h2>

        <div>
          <label class="block text-sm font-medium mb-1" for="datasetName">
            Название датасета
          </label>
          <input
            id="datasetName"
            v-model="datasetName"
            type="text"
            placeholder="Введите название"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div class="mt-6 flex justify-end space-x-3">
          <button
            @click="close"
            class="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none"
          >
            Закрыть
          </button>
          <button
            @click="confirm"
            :disabled="!datasetName"
            class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-none disabled:opacity-50"
          >
            ОК
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DatasetModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    datasetTypes: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      datasetName: '',
    };
  },
  mounted() {
    console.log("RRRRRRRRRRRRR ", this.datasetTypes)
  },  
  methods: {
    close() {
      this.$emit('update:visible', false);
      this.datasetName = '';
    },
    confirm() {
      this.$emit('create', {
        name: this.datasetName.trim(),
        datasetTypes: this.datasetTypes,
      });
      console.log("DDDDDDDDDDDDD ", this.datasetTypes)
      this.close();
    },
  },
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
