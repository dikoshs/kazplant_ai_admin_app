import { defineStore } from 'pinia'
import { getToken } from '../utils/auth'
import axios from 'axios'

export const useModelStore = defineStore('model', {
	state: () => ({
		error: null,
		models: [],
		model: [],
	}),
	actions: {
		async trainModel({ epoch, batch, name_model }) {
			this.error = null
			if (
				!Number.isInteger(epoch) ||
				!Number.isInteger(batch) ||
				epoch <= 0 ||
				batch <= 0
			) {
				this.error = 'Эпохи и батч должны быть целыми числами больше 0'
				console.error('trainModel error: Invalid epoch or batch', {
					epoch,
					batch,
				})
				return { success: false, error: this.error }
			}

			try {
				const accessToken = getToken()
				const params = new URLSearchParams()
				params.append('epoch', epoch)
				params.append('batch', batch)
				if (name_model) params.append('name_model', name_model)

				console.log('Sending trainModel request with:', params.toString())

				const response = await axios.post(
					'http://localhost:8000/v1/train/train-model',
					params,
					{
						headers: {
							Authorization: `Bearer ${accessToken}`,
							'Content-Type': 'application/x-www-form-urlencoded',
						},
					}
				)

				console.log('trainModel response:', response.data)
				return {
					success: true,
					message: response.data, // Expecting a string
				}
			} catch (error) {
				this.error =
					error.response?.data?.detail?.[0]?.msg || 'Ошибка при обучении модели'
				console.error(
					'trainModel error:',
					error.response?.data || error.message
				)
				return { success: false, error: this.error }
			}
		},
	},

	async fetchModels() {
		this.error = null
		try {
			const accessToken = getToken()
			const response = await axios.get(
				'http://127.0.0.1:8000/v1/train/get-training_sessions',
				{
					headers: { Authorization: `Bearer ${accessToken}` },
				}
			)
			this.models = response.data
			return this.plants
		} catch (error) {
			this.error =
				error.response?.data?.message || 'Ошибка при загрузке растений'
			console.error('fetchPlants error:', this.error)
			return []
		}
	},
	persist: true,
})
