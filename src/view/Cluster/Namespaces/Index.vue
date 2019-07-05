<template>
  <div class="namespaces">
    <table class="table table-bordered table-dark table-hover">
      <thead>
        <th>Name</th>
        <th>Labels</th>
        <th>Status</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>
            <router-link :to="{ name: 'namespaces-detail', params: {name: item.name } }">
              {{ item.name }}
            </router-link>
          </td>
          <td>
            <div v-if="item.labels.length > 0" v-for="label in item.labels">
              <span class="label bg-secondary text-dark">
                {{ label }}
              </span>
            </div>
            <div v-else>
              -
            </div>
          </td>
          <td>
            {{ item.status }}
          </td>
          <td>
            {{ item.age }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getAge } from '@/services/date'

export default {
  name: 'Namespaces',

  data () {
    return {
      items: []
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
      const items = this.namespaces.items.map((item) => {
        const name = item.metadata.name
        const labels = item.metadata.labels ? Object.keys(item.metadata.labels).map((key) => key + item.metadata.labels[key]) : []
        const status = item.status.phase
        const age = getAge(item.metadata.creationTimestamp)

        return { name, labels, status, age }
      })

      this.items = items
    }
  }
}
</script>

<style lang="scss">
.namespaces {
  table {
    tbody {
      tr {
        td {
          .label {
            padding: 2px 8px;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
