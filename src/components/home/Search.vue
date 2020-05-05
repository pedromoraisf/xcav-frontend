<template>
  <div>
    <vs-input
      placeholder="Buscar por documento..."
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    value: ""
  })
}
</script>

<style lang="scss">
.vs-input {
  width: 100% !important;
  background: rgba(255, 255, 255, .3) !important;
  padding: 1rem 1rem !important;

  &:active {
    background: rgba(255, 255, 255, .9) !important;
  }

  &:focus {
    background: rgba(255, 255, 255, .9) !important;
  }
}

.vs-input__label {
  color: white !important;
  font-weight: bold !important;
}
</style>