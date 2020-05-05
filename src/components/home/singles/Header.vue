<template>
  <header class="header-left-side padding-header-left-side">
    <div class="mb-5 text-center">
      <img width="70" :src="require(`@/assets/images/logo.png`)" />
    </div>

    <div class="d-flex justify-content-between">
      <h5 class="font-weight-bold text-white" v-html="`Extrator de Dados`" />

      <div class="d-flex align-items-center">
        <p class="text-white font-weight-bold user-name mb-0 mr-2" v-html="`Usuário`" />

        <vs-avatar color="primary shadow-lg" size="30">
          <span class="material-icons" v-html="`person`" />
        </vs-avatar>
      </div>
    </div>

    <search class="mt-5" />
  </header>
</template>

<script>
import Search from "@/components/home/Search";

export default {
  components: {
    Search
  }
};
</script>

<style lang="scss" scoped>
.header-left-side {
  background-image: linear-gradient(
    300deg,
    rgba(0, 0, 0, 0.85) 70%,
    rgba(0, 0, 0, 0.83)
  );

  & .material-icons {
    font-size: 1rem;
  }
}
</style>