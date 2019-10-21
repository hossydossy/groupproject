<template lang="html">
  <div class="container">
    <select-dropdown></select-dropdown>
  </div>
</template>

<script>
import SelectDropdown from './SelectDropdown.vue'
export default {
  name: 'continent-select',
  components: {
    'select-dropdown': SelectDropdown,
  }
}
</script>

<style lang="css" scoped>
</style>
