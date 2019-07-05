<template>
  <div class="detail">

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Detail',

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getNamespacesDetail: 'getNamespacesDetail'
    }),

    async init () {
      const name = this.$route.params.name
      await this.getNamespacesDetail(name)
    }
  }
}
</script>

