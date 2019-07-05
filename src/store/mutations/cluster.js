export default {
  setNamespaces (state, payload) {
    state.cluster.namespaces = payload
  },

  setNodes (state, payload) {
    state.cluster.nodes = payload
  },

  setStorageClasses (state, payload) {
    state.cluster.storageClasses = payload
  },

  setRoles (state, payload) {
    state.cluster.roles = payload
  },

  setPersistentVolumes (state, payload) {
    state.cluster.persistentVolumes = payload
  }
}