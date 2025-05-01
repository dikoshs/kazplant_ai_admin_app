<template>
    <div class="bg-white shadow-md rounded-2xl border p-6 flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-bold text-[#224C36] mb-2">{{ model.name }}</h2>
        <ul class="text-sm space-y-1 text-green-800">
          <li><span class="font-medium">Дата тренировки:</span> {{ model.lastTrain }}</li>
          <li><span class="font-medium">Параметров:</span> {{ model.params }}</li>
          <li><span class="font-medium">Классов:</span> {{ model.classes }}</li>
          <li><span class="font-medium">Top-1 точность:</span> {{ model.top1 }}</li>
          <li><span class="font-medium">Эпох:</span> {{ model.epochs }}</li>
        </ul>
      </div>
      <div class="mt-4 flex justify-end space-x-2">
        <button @click="goToModel" class="bg-[#224C36] hover:bg-green-800 text-white px-3 py-1 rounded-lg text-sm">
            Подробнее
        </button>
      </div>
    </div>
  </template>
  
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToModel() {
    router.push('/model')
}

defineProps({
    model: Object
})
defineEmits(['delete'])
</script>
  