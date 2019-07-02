<template>
  <div class="namespaces">
    <b-table hover bordered dark :items="items"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Namespaces',

  data () {
    return {
      items: [
        { Name: '', Labels: '', Status: null, Age: 0 }
      ]
    }
  },

  computed: {
    ...mapState({
      namespaces: state => state.cluster.namespaces
    })
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      getNamespaces: 'getNamespaces'
    }),

    async init () {
      await this.getNamespaces()

      this.createTableData()
    },

    createTableData () {
      if (this.namespaces) {

      }
    }
  }
}
</script>

