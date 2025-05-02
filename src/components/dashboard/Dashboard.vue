<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-8 max-w-6xl w-full items-center">
      <div class="bg-white p-6 rounded-2xl shadow-md w-full">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">График активности</h2>
        <canvas ref="chartCanvas" class="w-full h-64"></canvas>
      </div>

      <div class="w-full">
        <div class="p-6 bg-white rounded-2xl shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-center">Статистика по категориям</h2>
          <Pie :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
    <div class="bg-white rounded-xl mt-10 shadow-md p-6 max-h-96 overflow-y-auto">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Журнал действий</h2>
        <ul class="space-y-4">
            <li v-for="(log, index) in logs" :key="index" class="flex items-start space-x-3">
                <div class="flex-shrink-0 mt-1">
                <span class="inline-block w-3 h-3 rounded-full"
                        :class="log.type === 'info' ? 'bg-blue-500' :
                                log.type === 'success' ? 'bg-green-500' :
                                log.type === 'warning' ? 'bg-yellow-500' :
                                'bg-red-500'"></span>
                </div>
                <div>
                <p class="text-sm text-gray-700">
                    <span class="font-medium">{{ log.user }}</span> — {{ log.message }}
                </p>
                <p class="text-xs text-gray-400">{{ log.time }}</p>
                </div>
            </li>
        </ul>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { Pie } from 'vue-chartjs'
  import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js'
  
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, ArcElement)
  
  const chartCanvas = ref(null)
  
  const logs = [
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Система', message: 'База данных обновлена', time: 'Сегодня, 10:25', type: 'info' },
    { user: 'Админ', message: 'Удалил пользователя Ivan', time: 'Сегодня, 10:30', type: 'warning' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Система', message: 'Ошибка подключения к API', time: 'Сегодня, 10:32', type: 'error' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    { user: 'Админ', message: 'Вошёл в систему', time: 'Сегодня, 10:22', type: 'success' },
    ]

  const chartData = {
    labels: ['Категория A', 'Категория B', 'Категория C'],
    datasets: [
      {
        label: 'Моковые данные',
        data: [35, 25, 20],
        backgroundColor: ['#34d399', '#60a5fa', '#f472b6'],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
    },
  }


  onMounted(() => {
    const ctx = chartCanvas.value.getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май'],
        datasets: [{
          label: 'Посещения',
          data: [12, 19, 3, 5, 9],
          borderColor: '#3B7254',
          backgroundColor: 'rgba(59, 114, 84, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  })
  </script>
  
  <style scoped>
  canvas {
    max-height: 320px;
  }
  </style>
  