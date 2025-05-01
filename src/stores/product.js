import { defineStore } from 'pinia';
import { saveToken, getToken, removeToken } from '../utils/auth'; 
import axios from 'axios';


export const useProductStore = defineStore('product', {
    state: () => ({
    }),

    actions: {
        async allProducts() {
            this.error = null;

            try {
                const accessToken = getToken();

                const response = await axios.get('http://localhost:8000/products/all', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const product_results = response.data;
                return { product_results };

            } catch (error) {
                if (error.response) {
                    this.error = error.response.data.message || 'Ошибка при авторизации';
                } else {
                    this.error = 'Произошла ошибка, повторите позднее';
                }
                return { success: false, error: this.error };
            }
        },
        async updateIsTracking(product_id) {
            try {
                const accessToken = getToken();
                
                const response = await axios.put(
                    `http://localhost:8000/products/isTracking/${product_id}`, 
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        }
                    }
                );
                
                return {  };

            } catch (error) {
                if (error.response) {
                    this.error = error.response.data.message || 'Ошибка при авторизации';
                } else {
                    this.error = 'Произошла ошибка, повторите позднее';
                }
                return { success: false, error: this.error };
            }
        },
        async addProduct(productName, productCode, quantity, price){
            try {
                const accessToken = getToken();
                const response = await axios.post(
                    `http://localhost:8000/products/add`, 
                    {
                        name: productName,
                        code: productCode,
                        quantity,
                        price,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        }
                    }
                );

                const status = response.data;

                return status;

            } catch (error) {
                if (error.response) {
                    this.error = error.response.data.message || 'Ошибка при авторизации';
                } else {
                    this.error = 'Произошла ошибка, повторите позднее';
                }
                return { success: false, error: this.error };
            }
        },
        async downloadProductsListExcel() {
            try {
                const accessToken = getToken();
                const response = await axios.get(
                    `http://localhost:8000/products/all/excel`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                        responseType: 'blob' 
                    }
                );
        
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'products.xlsx');
                document.body.appendChild(link);
                link.click();
                link.remove();
                window.URL.revokeObjectURL(url);
        
                return { success: true };
        
            } catch (error) {
                if (error.response) {
                    this.error = error.response.data.detail || 'Ошибка при скачивании';
                } else {
                    this.error = 'Произошла ошибка, повторите позднее';
                }
                return { success: false, error: this.error };
            }
        },
    },

    persist: true, 
});
