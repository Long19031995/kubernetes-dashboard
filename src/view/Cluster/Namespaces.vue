<template>
  <div class="namespaces">
    namespaces
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Namespaces',

  data () {
    return {
      cluster: store.cluster
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.cluster.fetchNodes()
    }
  }
}
</script>

