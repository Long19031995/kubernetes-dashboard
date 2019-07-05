import api from '@/api'

export default {
  async getPods ({ commit }) {
    const response = await api.workloads.getPods()
    
    commit('setPods', response)
  }
}