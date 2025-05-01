<template>
    <nav class="bg-gray-800 text-white p-4 flex items-center justify-between">
        <!-- Левая часть: Эмблема -->
        <div class="flex items-center">
            <div class="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
            <h1 class="text-xl font-bold">KazPlantAI</h1>
        </div>
        <!-- Правая часть: Кнопка "Войти" или "Выйти" -->
        <div>
            <router-link v-if="!isUserLoggedIn" to="/login"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                Войти
            </router-link>
            <button v-if="isUserLoggedIn" @click="logout"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300">
                Выйти
            </button>
        </div>
    </nav>
</template>

<script>
import { isLoggedIn } from '../../utils/auth';

export default {
    name: "Navbar",
    data() {
        return {
            isUserLoggedIn: false,
        };
    },
    mounted() {
        this.isUserLoggedIn = isLoggedIn();
    },
    watch: {
        '$route': function () {
            this.isUserLoggedIn = isLoggedIn();
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('access_token');
            this.isUserLoggedIn = false;

            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
</style>
