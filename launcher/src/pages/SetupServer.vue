<template>
  <div>
    <background-page> <form-setup @page="page"></form-setup></background-page>
  </div>
</template>
<script>
import FormSetup from '../components/UI/server-connection/FormSetup.vue'
export default {
  components: { FormSetup },
  methods: {
    page () {
      this.$emit('page', 'welcome-page')
    }
  }
}
</script>
<style scoped></style>
