<template>
    <div
        class="bg-gradient-to-br from-gray-200 to-gray-400 min-h-screen flex flex-col items-center justify-center text-center">
        <div
            class="bg-white p-8 md:p-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p class="text-xl text-gray-600 mb-6">
                Упс! Страница, которую вы ищете, не найдена.
            </p>
            <router-link to="/"
                class="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Вернуться на главную
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
    };
</script>
