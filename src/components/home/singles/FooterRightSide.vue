<template>
  <footer>
    <vs-button :loading="loadingButton" @click.prevent="downloadScale" block floating>
      <div class="text-center w-100">Baixar documentos</div>
    </vs-button>
  </footer>
</template>

<script>
import axios from "axios";
import { _ } from "vue-underscore";

export default {
  data: () => ({
    downloadOption: "",
    downloadOptions: ["nota-de-corretagem", "extrato-de-investimentos"],
    servers: [
      "https://pdf-fuckin-generator-1.herokuapp.com",
      "https://pdf-fuckin-generator-2.herokuapp.com",
      "https://pdf-fuckin-generator-3.herokuapp.com",
      "https://pdf-fuckin-generator-4.herokuapp.com",
      "https://pdf-fuckin-generator-5.herokuapp.com",
      "https://pdf-fuckin-generator-6.herokuapp.com",
      "https://pdf-fuckin-generator-7.herokuapp.com",
      "https://pdf-fuckin-generator-8.herokuapp.com",
      "https://pdf-fuckin-generator-9.herokuapp.com",
      "https://pdf-fuckin-generator-10.herokuapp.com"
    ],
    currentServer: 0,
    loadingButton: false
  }),
  methods: {
    async downloadScale() {
      this.loadingButton = true;

      try {
        const responseRequest = await axios.get(`${this.servers[this.currentServer]}/${this.downloadOption}?numeroDeArquivos=10&diferentesPossibilidades=3`);
        if (responseRequest.status === 200) {
          this.downloadOption = _.shuffle(this.downloadOptions)[0];
          window.open(`${responseRequest.data.url}`, `_blank`);
        } else {
          this.currentServer++;
        }
      } catch {
        this.currentServer++;
        this.loadingButton = false;
        return false;
      }

      this.loadingButton = false;
    }
  },
  mounted() {
    this.servers.forEach(server => {
      axios.get(server);
    });
    this.downloadOption = _.shuffle(this.downloadOptions)[0];
  }
};
</script>