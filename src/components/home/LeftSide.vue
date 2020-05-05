<template>
  <div class="left-side">
    <home-header />

    <menu-doc @doc-selection="docSelection" />

    <user-drop-area :selection="selection" />
  </div>
</template>

<script>
import HomeHeader from "@/components/home/singles/Header";
import MenuDoc from "@/components/home/singles/MenuDoc";
import UserDropArea from "@/components/home/singles/UserDropArea";

export default {
  data: () => ({
    selection: {
      doc: 0,
      disable: 0
    }
  }),
  components: {
    HomeHeader,
    MenuDoc,
    UserDropArea
  },
  methods: {
    docSelection(doc) {
      this.selection.doc = doc.link;
      this.selection.disable = doc.disable;
    }
  }
};
</script>

<style lang="scss">
.swiper-container {
  position: relative;
  top: -5rem;
}

.user-name {
  font-size: 0.9rem;
}

.doc-select {
  width: 200px;
  text-align: left !important;
  font-weight: bold;
}

.vs-button__content {
  justify-content: start !important;
  width: auto !important;
}
</style>