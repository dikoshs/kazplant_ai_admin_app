<template>
	<div class="flex flex-col min-h-screen">
	  <main class="flex-grow p-4">
		<p>Welcome to the app!</p>
  
		<div class="camera">
		  <video ref="video" autoplay playsinline class="border w-full max-w-md"></video>
		  <!-- Исходное фото -->
		  <img src="../assets/img/sample_image.jpg" alt="sample_photo" />
  
		  <!-- Сегментированное: показывает только когда есть данные -->
		  <img
			v-if="segmentedData"
			:src="segmentedData"
			id="segmentedResult"
			class="mt-4 max-w-md border"
			alt="Segmented result"
		  />
  
		  <button
			@click="takePhoto"
			class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
		  >📸 Распознать</button>
  
		  <canvas ref="canvas" class="hidden"></canvas>
  
		  <div v-if="photo">
			<p class="mt-4">Фото:</p>
			<img :src="photo" alt="Снимок" class="mt-2 border max-w-md" />
		  </div>
		</div>
	  </main>
	</div>
  </template>
  
  <script>
  export default {
	name: "Main",
	data() {
	  return {
		photo: null,
		segmentedData: null,  // сюда придёт base64 от Android
	  };
	},
	mounted() {
	  // 1) Старт камеры
	  this.startCamera();
  
	  // 2) Экспортируем глобальный JS-колбэк, чтобы Android мог вызвать его
	  window.displaySegmentedImage = (base64Image) => {
		debugger
		// base64Image уже вида 'data:image/png;base64,...'
		this.segmentedData = base64Image;
	  };
	},
	methods: {
	  async startCamera() {
		try {
		  const stream = await navigator.mediaDevices.getUserMedia({
			video: { facingMode: { exact: "environment" } }
		  });
		  this.$refs.video.srcObject = stream;
		} catch (err) {
		  alert("Не удалось получить доступ к камере: " + err.message);
		}
	  },
	  takePhoto() {
		// Берём тот же <img alt="sample_photo">, переводим в base64
		const img = document.querySelector('img[alt="sample_photo"]');
		const canvas = document.createElement('canvas');
		canvas.width = img.naturalWidth;
		canvas.height = img.naturalHeight;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		const dataURL = canvas.toDataURL('image/jpeg', 1.0);
  
		// Вызываем Android-метод (если он действительно в window.ok)
		if (window.ok?.performSecondClickWithImage) {
		  window.ok.performSecondClickWithImage(dataURL);
		} else {
		  console.error("performSecondClickWithImage not available");
		}
	  },
	},
  };
  </script>
  
  <style scoped>
  .camera video {
	border: 2px solid #ccc;
	border-radius: 8px;
  }
  </style>
  