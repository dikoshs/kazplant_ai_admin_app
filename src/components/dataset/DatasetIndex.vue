<template>
    <div>
			<div class="grid grid-cols-6">
				<div
					v-for="(item, index) in items" :key="index"
					class="     "
				>
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
			</div>
    </div>
</template>

<script>
export default {
  components: {
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
    }
  }
}
</script>