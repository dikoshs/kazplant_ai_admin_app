import { defineStore } from 'pinia'
import { saveToken, getToken, removeToken } from '../utils/auth'
import axios from 'axios'

export const useDatasetStore = defineStore('product', {
	state: () => ({
		error: null,
		plants: [],
		aiTypes: [],
	}),
	actions: {
		async fetchPlants() {
			this.error = null
			try {
				const accessToken = getToken()
				const response = await axios.get(
					'http://127.0.0.1:8000/v1/ai_plants/get-ai_plants',
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}
				)
				this.plants = response.data // Expecting [{ id: Number, name: String }, ...]
				return this.plants
			} catch (error) {
				this.error =
					error.response?.data?.message || 'Ошибка при загрузке растений'
				console.error('fetchPlants error:', this.error)
				return []
			}
		},

		async fetchAiTypes() {
			this.error = null
			try {
				const accessToken = getToken()
				const response = await axios.get(
					'http://127.0.0.1:8000/v1/ai_plants/get-ai_types',
					{
						headers: { Authorization: `Bearer ${accessToken}` },
					}
				)
				this.aiTypes = response.data // Expecting [{ id: Number, name: String }, ...]
				return this.aiTypes
			} catch (error) {
				this.error =
					error.response?.data?.message || 'Ошибка при загрузке типов'
				console.error('fetchAiTypes error:', this.error)
				return []
			}
		},

		async allDatasetInfo() {
			this.error = null
			try {
				const accessToken = getToken()
				const response = await axios.get(
					'http://127.0.0.1:8000/v1/ai_plants/plants-info',
					{
						headers: { Authorization: `Bearer ${accessToken}` },
						params: { limit: 20 },
					}
				)
				const product_results = response.data
				return { product_results }
			} catch (error) {
				this.error = error.response?.data?.message || 'Ошибка при авторизации'
				console.error('allDatasetInfo error:', this.error)
				return { success: false, error: this.error }
			}
		},

		async uploadPhotos({ ai_plant_id, ai_type_id, files }) {
			this.error = null
			if (!files || !Array.isArray(files) || files.length === 0) {
				this.error = 'Не выбраны файлы для загрузки'
				console.error('uploadPhotos error: No files provided')
				return { success: false, error: this.error }
			}

			try {
				const accessToken = getToken()
				const formData = new FormData()
				formData.append('ai_plant_id', ai_plant_id)
				formData.append('ai_type_id', ai_type_id)
				files.forEach((file, index) => {
					console.log(`Appending file[${index}]:`, file.name)
					formData.append(`files`, file)
				})

				const response = await axios.post(
					'http://127.0.0.1:8000/v1/ai_plants/upload-photos',
					formData,
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
							'Content-Type': 'multipart/form-data',
						},
					}
				)

				return {
					success: true,
					photo_count: response.data.photo_count,
					saved_paths: response.data.saved_paths,
				}
			} catch (error) {
				this.error =
					error.response?.data?.detail?.[0]?.msg ||
					'Ошибка при загрузке фотографий'
				console.error(
					'uploadPhotos error:',
					error.response?.data || error.message
				)
				return { success: false, error: this.error }
			}
		},
	},
	persist: true,
})
