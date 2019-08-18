<template>
  <div id="app">
    <loading :active.sync="loading"
          style="z-index:99999;overflow-y:hidden;"></loading>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['loading']),
  },
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
