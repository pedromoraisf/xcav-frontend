<template>
  <section v-if="selection.doc !== 0">
    <div class="container-div text-center p-3 animated fadeIn faster" v-if="selection.disable">
      <p v-html="`O documento selecionado não esta disponível para extração no momento`" />
    </div>

    <div class="container-div p-3" v-else-if="!selection.disable">
      <vue-dropzone
        @vdropzone-sending="commitSetterFileState({ state: 1, data: `` })"
        @vdropzone-removed-file="commitSetterFileState({ state: 0, data: `` })"
        @vdropzone-success="(file, response) => commitSetterFileState({ state: 2, data: response })"
        @vdropzone-error="openNotification(`bottom-left`, `danger`, `Ops...`, `Ocorreu um erro na operação 👎🏽`)"
        class="big-rounded animated fadeIn faster"
        ref="myVueDropzone"
        id="dropzone"
        :options="dropzoneOptions"
        :useCustomSlot="true"
      >
        <div class="dropzone-custom-content">
          <h4 class="dropzone-custom-title font-weight-bold font-primary text-secondary">
            <span class="material-icons" style="font-size: 4rem" v-html="`cloud_queue`" />
          </h4>
        </div>
      </vue-dropzone>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  props: {
    selection: {
      type: Object
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
    dropzoneOptions: {
      url: process.env.VUE_APP_API,
      thumbnailWidth: 200,
      addRemoveLinks: true
    }
  }),
  methods: {
    ...mapActions(["commitSetterFileState"]),
    openNotification(position, color, title, text) {
      this.$vs.notification({
        color,
        position,
        title,
        text
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container-div {
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
}

#dropzone {
  cursor: pointer !important;
}
</style>