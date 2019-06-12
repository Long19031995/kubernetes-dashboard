import api from '@/api'

export default {
  nodes: {},
  namespaces: {},
  persistentVolumes: {},
  storageClasses: {},

  async fetchNodes () {
    this.nodes = await api.cluster.getNodes()
  },

  async fetchNamespaces () {
    this.namespaces = await api.cluster.getNamespaces()
  },

  async fetchPersistentVolumes () {
    this.persistentVolumes = await api.cluster.getPersistentVolumes()
  },

  async fetchStorageClasses () {
    this.storageClasses = await api.cluster.getStorageClasses()
  }
}