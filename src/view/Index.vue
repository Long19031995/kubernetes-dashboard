<template>
  <div class="dashboard">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss">
.dashboard {
  float: left;
  width: calc(100% - 210px);
  height: 100vh;
  padding: 24px;
}
</style>

