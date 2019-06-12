<template>
  <div class="sidebar-left">
    <div v-if="listItem" class="list-item">
      <div v-for="(item, index) in listItem" class="item" :key="index">
        <div @click="changeComponent(item.component)" class="name">
          {{ item.name }}
        </div>
        <div v-if="item.listChild" class="list-child">
          <div v-for="(child, index) in item.listChild" class="child" :key="index">
            <div @click="changeComponent(child.component)" class="name">
              {{ child.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'SidebarLeft',

  data () {
    return {
      listItem: [
        {
          name: 'Cluster',
          listChild: [
            {
              name: 'Namespaces',
              component: 'Namespaces'
            },
            {
              name: 'Nodes',
              component: 'Nodes'
            },
            {
              name: 'Persistent Volumnes',
              component: 'PersistentVolumnes'
            },
            {
              name: 'Storage Classes',
              component: 'StorageClasses'
            }
          ]
        }
      ]
    }
  },

  methods: {
    changeComponent (component) {
      if (component) {
        store.currentComponent = component
      }
    }
  }
}
</script>

<style lang="scss">
.sidebar-left {
  float: left;
  width: 210px;
  height: 100vh;
  background-color: rgb(48, 65, 86);
  overflow: auto;
  .list-item {
    .item {
      & > .name {
        padding: 20px 0 20px 20px;
        color: rgb(191, 203, 217);
        transition: 0.15s ease-in-out;
        &.active {
          color: rgb(64, 158, 255);
        }
        &:hover {
          background-color: #263445;
          cursor: pointer;
        }
      }
      .list-child {
        .child {
          & > .name {
            padding: 20px 0 20px 30px;
            color: rgb(191, 203, 217);
            background-color: #1f2d3d;
            transition: 0.15s ease-in-out;
            &.active {
              color: rgb(64, 158, 255);
            }
            &:hover {
              background-color: #001528;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
