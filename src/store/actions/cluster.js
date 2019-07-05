import api from '@/api'

export default {
  async getNamespaces ({ commit }) {
    const response = await api.clusterApi.getNamespaces()

    commit('setNamespaces', response)
  },

  async getNamespacesDetail ({ commit }, name) {
    const response = await api.clusterApi.getNamespacesDetail(name)

    commit('setNamespacesDetail', response)
  },

  async getNodes ({ commit }) {
    const response = await api.clusterApi.getNodes()

    commit('setNodes', response)
  },

  async getStorageClasses ({ commit }) {
    const response = await api.clusterApi.getStorageClasses()

    commit('setStorageClasses', response)
  },

  async getRoles ({ commit }) {
    const response = await api.clusterApi.getRoles()

    commit('setRoles', response)
  },

  async getPersistentVolumes ({ commit }) {
    const response = await api.clusterApi.getPersistentVolumes()

    commit('setPersistentVolumes', response)
  }
}