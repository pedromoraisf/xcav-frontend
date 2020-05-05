<template>
  <div class="right-side shadow-lg d-flex flex-column justify-content-between p-5">
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
    <div
      v-else-if="fileState.state === 2"
      class="text-center text-white animated fadeIn result-section border-0"
    >
      <table class="table table-dark big-rounded border-0" v-if="fileState.data !== ``">
        <thead>
          <tr>
            <th>Código</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="res in fileState.data" :key="res.id">
            <td v-html="res.codigo" />
            <td v-html="res.quantidade" />
            <td v-html="res.preco" />
            <td v-html="res.data" />
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Rodapé de acesso a download dos documentos -->
    <footer-right-side />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Loader from "@/components/Loader";
import FooterRightSide from "@/components/home/singles/FooterRightSide";

export default {
  data: () => ({
    response: [
      {
        codigo: "JBS ON NM",
        quantidade: "1",
        preco: "28,32",
        data: "08/01/2020"
      },
      {
        codigo: "KLABIN S/A UNT N2",
        quantidade: "1",
        preco: "19,47",
        data: "08/01/2020"
      },
      {
        codigo: "TAESA UNT N2",
        quantidade: "1",
        preco: "30,36",
        data: "08/01/2020"
      }
    ]
  }),
  computed: {
    ...mapState(["fileState"])
  },
  components: {
    Loader,
    FooterRightSide
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

.result-section {
  height: 400px;
  overflow-y: scroll;
}

table {
  & tbody {
    & tr {
      & th {
        font-size: 0.9rem;
      }
    }
  }
  & tbody {
    & tr {
      & td {
        font-size: 0.7rem;
      }
    }
  }
}
</style>