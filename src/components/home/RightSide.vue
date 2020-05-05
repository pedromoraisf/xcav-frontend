<template>
  <div class="right-side shadow-lg">
    <!-- Quando não tiver arquivo na dropzone -->
    <div v-if="fileState.state === 0" class="text-center animated fadeIn">
      <span class="find-icon material-icons mr-3 mb-3" v-html="`find_in_page`" />
      <p
        class="text-white font-weight-light"
        v-html="`Insira um documento para a extração de dados`"
      />
    </div>

    <!-- Quando um arquivo tiver sendo enviado -->
    <div v-else-if="fileState.state === 1" class="text-center animated fadeIn faster">
      <loader :styleReceive="`color: #333; width: 5rem; height: 5rem;`" />
    </div>

    <!-- Quando o resultado da API foi positivo -->
    <div v-else-if="fileState.state === 2" class="text-center text-white animated fadeIn">
      RESULTADO
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Loader from "@/components/Loader";

export default {
  computed: {
    ...mapState(["fileState"])
  },
  components: {
    Loader
  }
};
</script>

<style lang="scss" scoped>
.right-side {
  background-color: rgba(0, 0, 0, 0.85);
}

.find-icon {
  color: white;
  font-size: 6rem;
}
</style>