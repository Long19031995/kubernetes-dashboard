import http from '@/services/http'

export default {
  getNodes () {
    return http.get('/api/v1/nodes')
  },

  getNamespaces () {
    return http.get('/api/v1/namespaces')
  },

  getPersistentVolumes () {
    return http.get('/api/v1/persistentvolumeclaims')
  },

  getStorageClasses () {
    return http.get('/apis/storage.k8s.io')
  }
}