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
@import '~@coreui/icons/css/coreui-icons.min.css';
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome.scss';
$simple-line-font-path: '~simple-line-icons/fonts/';
@import '~simple-line-icons/scss/simple-line-icons.scss';
@import '~flag-icon-css/css/flag-icon.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import "~@coreui/coreui/scss/coreui";

.app {
  display: unset;
}
</style>
