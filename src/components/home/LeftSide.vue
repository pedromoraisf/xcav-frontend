<template>
  <div class="left-side">
    <header class="header-left-side padding-sides">
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

    <section>
      <swiper ref="swiper-container" :options="swiperOptions" class="small-slide">
        <swiper-slide class="py-5 pl-2 w-auto" v-for="doc in docOptions" :key="doc.id">
          <vs-button
            @click.prevent="activeSelection = doc.link"
            :floating="doc.disable ? false : true"
            class="doc-select p-3 text-left d-flex justify-content-start"
            :color="doc.disable ? `rgb(149, 198, 248)` : `#449EF8`"
          >
            {{ doc.name }}
          </vs-button>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script>
import Search from "@/components/home/Search";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data: () => ({
    activeSelection: 0,
    docOptions: [
      {
        name: "Extrato de Investimento",
        link: 1,
        disable: false
      },
      {
        name: "Nota de Corretagem",
        link: 2,
        disable: false
      },
      {
        name: "Boletim",
        link: 2,
        disable: true
      },
      {
        name: "Boleto",
        link: 3,
        disable: true
      },
      {
        name: "Boleto",
        link: 3,
        disable: true
      }
    ],
    swiperOptions: {
      slidesPerView: "auto",
      spaceBetween: 0
    }
  }),
  components: {
    Search,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
.header-left-side {
  background-color: rgba(0, 0, 0, 0.85);

  & .material-icons {
    font-size: 1rem;
  }
}

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
  font-size: 1.5rem;
  font-weight: bold;
}

.vs-button__content {
  justify-content: start !important;
  width: auto !important;
}
</style>