<template>
  <div class="sidebar-left">
    <div v-if="menu" class="list-item">
      <div v-for="(item, index) in menu" class="item" :key="index">
        <router-link :to="{ name: item.routerName }" class="name">
          {{ item.name }}
        </router-link>
        <div v-if="item.listChild" class="list-child">
          <div v-for="(child, index) in item.listChild" class="child" :key="index">
            <router-link :to="{ name: child.routerName }" class="name">
              {{ child.name}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import menu from '@/constants/menu'

export default {
  name: 'SidebarLeft',

  data () {
    return {
      menu: menu
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
        display: block;
        padding: 20px 0 20px 20px;
        color: rgb(191, 203, 217);
        transition: 0.15s ease-in-out;
        &.active {
          color: rgb(64, 158, 255);
        }
        &:hover {
          background-color: #263445;
          cursor: pointer;
          text-decoration: none;
        }
      }
      .list-child {
        .child {
          & > .name {
            display: block;
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
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
