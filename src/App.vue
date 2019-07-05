<template>
  <div class="app">
    <SidebarLeft/>
    <router-view/>
  </div>
</template>

<script>
import SidebarLeft from '@/components/SidebarLeft'

export default {
  components: { SidebarLeft },

  name: 'App'
}
</script>

<style lang="scss">
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import "~@coreui/coreui/scss/coreui";

.app {
  display: unset;
}
</style>
