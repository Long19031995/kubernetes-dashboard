<template>
  <div class="nodes">
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Nodes',

  computed: {
    ...mapState({
      nodes: state => state.cluster.nodes
    })
  },

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getNodes: 'getNodes'
    }),

    async init() {
      await this.getNodes()
    }
  }
}
</script>

