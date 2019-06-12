<template>
  <div class="dashboard">
    <component :is="store.currentComponent" />
  </div>
</template>

<script>
import store from '@/store'
import Namespaces from '@/view/Cluster/Namespaces'
import Nodes from '@/view/Cluster/Nodes'
import PersistentVolumnes from '@/view/Cluster/PersistentVolumnes'
import StorageClasses from '@/view/Cluster/StorageClasses'

export default {
  name: 'Dashboard',

  components: {
    Namespaces,
    Nodes,
    PersistentVolumnes,
    StorageClasses
  },

  data () {
    return {
      store: store
    }
  }
}
</script>

<style>
.dashboard {
  float: left;
  width: calc(100% - 210px);
}
</style>
