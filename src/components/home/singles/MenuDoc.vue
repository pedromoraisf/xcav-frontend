<template>
  <section>
    <swiper ref="swiper-container" :options="swiperOptions" class="small-slide">
      <swiper-slide class="py-5 pl-2 w-auto" v-for="doc in docOptions" :key="doc.id">
        <vs-button
          @click.prevent="$emit(`doc-selection`, doc)"
          :floating="doc.disable ? false : true"
          class="doc-select p-3 text-left d-flex justify-content-start"
          :color="doc.disable ? `rgb(149, 198, 248)` : `#449EF8`"
        >{{ doc.name }}</vs-button>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data: () => ({
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
  })
};
</script>