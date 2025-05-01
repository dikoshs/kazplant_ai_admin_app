<template>
	<div class="flex min-h-screen bg-gray-100">
	  <!-- Sidebar слева -->
	  <Sidebar />
  
	  <!-- Основной контент -->
	  <main class="flex-1 p-6 overflow-y-auto">
		<router-view />
	  </main>
	</div>
  </template>
  
  <script>
  import Sidebar from "./components/menu/Sidebar.vue";
  
  export default {
	name: "App",
	components: {
	  Sidebar,
	},
  };
  </script>
  

<style>
	nav {
		margin-bottom: 1rem;
	}

	nav a {
		margin-right: 1rem;
		text-decoration: none;
		color: blue;
	}
</style>
