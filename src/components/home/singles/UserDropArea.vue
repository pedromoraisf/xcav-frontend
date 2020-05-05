<template>
  <section v-if="selection.doc !== 0">
    <div v-if="selection.disable" class="text-center">
      <h5 v-html="`O documento selecionado não esta disponível para extração no momento`" />
    </div>

    <div v-else-if="!selection.disable"></div>
  </section>
</template>

<script>
export default {
  props: {
    selection: {
      type: Object
    }
  }
};
</script>