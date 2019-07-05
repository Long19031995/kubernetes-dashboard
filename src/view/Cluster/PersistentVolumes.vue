<template>
  <div class="persistent-volumnes">
    <table class="table table-hover table-bordered table-dark">
      <thead>
        <th>Name</th>
        <th>Capacity</th>
        <th>Access Modes</th>
        <th>Reclaim Policy</th>
        <th>Status</th>
        <th>Claim</th>
        <th>Storage Class</th>
        <th>Reason</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{ item.name }}</td>
          <td>{{ item.capacity }}</td>
          <td>
            <div v-if="item.accessModes.length > 0" v-for="mode in item.accessModes">
              {{ mode }}
            </div>
            <div v-else>
              -
            </div>
          </td>
          <td>{{ item.reclaimPolicy }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.claim }}</td>
          <td>{{ item.storageClass }}</td>
          <td>{{ item.reason }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getAge } from '@/services/date'

export default {
  name: 'PersistentVolumnes',

  data () {
    return {
      items: []
    }
  },

  computed: {
    ...mapState({
      persistentVolumes: state => state.cluster.persistentVolumes
    })
  },

  async mounted () {
    await this.init()
  },

  methods: {
    ...mapActions({
      getPersistentVolumes: 'getPersistentVolumes'
    }),

    async init () {
      await this.getPersistentVolumes()

      this.createTable()
    },

    createTable () {
      this.persistentVolumes.items.forEach((item) => {
        const name = item.metadata.name
        const capacity = item.spec.capacity.storage
        const accessModes = item.spec.accessModes
        const reclaimPolicy = item.spec.persistentVolumeReclaimPolicy
        const status = item.status.phase
        const claim = `${item.spec.claimRef.namespace}/${item.spec.claimRef.name}`
        const storageClass = item.spec.storageClassName
        const reason = '.'
        const age = getAge(item.metadata.creationTimestamp)

        this.items.push({
          name, capacity, accessModes, reclaimPolicy, status, claim, storageClass, reason, age
        })
      })
    }
  }
}
</script>
