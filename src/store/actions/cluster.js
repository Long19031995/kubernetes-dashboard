import api from '@/api'

export default {
  async getNamespaces ({ commit }) {
    const response = await api.clusterApi.getNamespaces()

    commit('setNamespaces', response)
  }
}