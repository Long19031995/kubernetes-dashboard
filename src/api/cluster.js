import http from '@/services/http'

export default {
  async getNodes () {
    return await http.get('/api/v1/nodes')
  },

  async getNamespaces () {
    return await http.get('/api/v1/namespaces')
  },

  async getPersistentVolumes () {
    return await http.get('/api/v1/persistentvolumeclaims')
  },

  async getStorageClasses () {
    return await http.get('/apis/storage.k8s.io')
  }
}