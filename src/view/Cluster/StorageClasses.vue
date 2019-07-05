<template>
  <div class="storage-classes">
    <table class="tabel-bordered table-hover table-dark">
      <thead>
        <th>Name</th>
        <th>Labels</th>
        <th>Provisioner</th>
        <th>Parameters</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr v-for="item in items">

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'StorageClasses',

  data () {
    return {
      items: []
    }
  },

  computed: {
    ...mapState({
      storageClasses: state => state.cluster.storageClasses
    })
  },

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getStorageClasses: 'getStorageClasses'
    }),

    async init () {
      await this.getStorageClasses()

      this.createTableData()
    },

    createTableData () {
      
    }
  }
}
</script>
