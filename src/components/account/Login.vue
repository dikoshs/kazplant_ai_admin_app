<template>
    <div class="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex items-center justify-center">
        <div
            class="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Добро пожаловать</h2>
            
            <div v-if="error" class="text-red-500 mb-4 text-center">
                {{ error }}
            </div>

            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="username" class="block text-gray-600 font-medium mb-2">Имя пользователя</label>
                    <input v-model="username" type="text" id="username" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-600 font-medium mb-2">Пароль</label>
                    <input v-model="password" type="password" id="password" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Войти
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../../stores/auth';

export default {
    name: "LoginPage",
    data() {
        return {
            username: "",
            password: "",
            error: null,
        };
    },
    methods: {
        async handleLogin() {
            const authStore = useAuthStore();
            const { success, error } = await authStore.login(this.username, this.password);

            if (success) {
                this.$router.push("/dashboard");
            } else {
                this.error = error;
            }
        },
    },
};
</script>

<style scoped></style>
