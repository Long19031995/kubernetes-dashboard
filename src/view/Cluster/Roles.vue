<template>
  <div class="roles">

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Roles',

  computed: {
    ...mapState({
      roles: state => state.cluster.roles
    })
  },

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getRoles: 'getRoles'
    }),

    async init () {
      await this.getRoles()
    }
  }
}
</script>
