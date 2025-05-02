import { defineStore } from 'pinia';
import { saveToken, getToken, removeToken } from '../utils/auth';
import axios from 'axios';
import { API_URL } from '../config';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        token: null,
        error: null,
    }),

    actions: {
        async login(username, password) {
            this.error = null;

            try {
                const response = await axios.post(`${API_URL}/auth/login`, {
                    username,
                    password,
                });

                const token = response.data.access_token;
                saveToken(token);
                this.token = token;
                this.isLoggedIn = true;

                return { success: true, token };

            } catch (error) {
                if (error.response) {
                    this.error = error.response.data.message || 'Ошибка при авторизации';
                } else {
                    this.error = 'Произошла ошибка, повторите позднее';
                }
                return { success: false, error: this.error };
            }
        },

        logout() {
            removeToken();
            this.token = null;
            this.isLoggedIn = false;
        },

        checkAuth() {
            const token = getToken();
            if (token) {
                this.token = token;
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        },
    },

    persist: true,
});
