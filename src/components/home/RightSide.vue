<template>
  <div class="right-side shadow-lg">
    <div class="text-center">
      <span class="find-icon material-icons mr-3 mb-3" v-html="`find_in_page`" />
      <p class="text-white font-weight-light" v-html="`Insira um documento para a extração de dados`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-side {
  background-color: rgba(0, 0, 0, 0.85);
}

.find-icon {
  color: white;
  font-size: 6rem;
}
</style>