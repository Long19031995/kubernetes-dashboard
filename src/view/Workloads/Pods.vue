<template>
  <div class="pods">
    pods
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Pods',

  computed: {
    ...mapState({
      pods: state => state.workloads.pods
    })
  },

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getPods: 'getPods'
    }),

    async init () {
      await this.getPods()
    }
  }
}
</script>
