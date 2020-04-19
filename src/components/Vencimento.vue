<template>
  <div class="container">
    <form action="" @submit.prevent="registerVencimento">
      <article>
        <h4>Produto</h4>
        <div class="quarter-width">
          <label for="fieldCodigo">Código</label>
          <input
            type="text"
            v-model="vencimento.produto.codigo"
            @change="getProduto"
            required
            placeholder="78954654654"
            id="fieldCodigo"
            :disabled="vencimento.produto.id"
          />
        </div>

        <div class="three-quarter-width ">
          <label for="fieldNome">Nome</label>
          <input
            type="text"
            v-model="vencimento.produto.nome"
            :disabled="vencimento.produto.id"
            placeholder="Sabão Minuano"
            id="fieldNome"
            required
          />
        </div>
        <div v-if="!vencimento.produto.id" class="full-width">
          <label for="fieldSetor">Setor</label>
          <select id="fieldSetor" required v-model="vencimento.produto.setor"
            :disabled="vencimento.produto.id">
            <option
              v-for="setor in setores"
              v-bind:key="setor.id"
              :value="setor.id"
              >{{ setor.nome }}</option
            >
          </select>
        </div>
      </article>
      <article>
        <h4>Vencimento</h4>

        <div class="half-width">
          <label for="fieldVencimento">Validade</label>
          <input
            type="date"
            placeholder="CJ Patoilo"
            id="fieldVencimento"
            required
            v-model="vencimento.produto.data"
          />
        </div>

        <div class="half-width">
          <label for="fieldQuantidade">Quantidade</label>
          <input
            type="number"
            placeholder="Unidades, ex: 1, 4, 7, 9"
            id="fieldQuantidade"
            required
            v-model="vencimento.produto.quantidade"
          />
        </div>
      </article>

      <button class="button">Salvar</button>
    </form>
  </div>
</template>

<script>
import { $produtos } from "@/services/Resources";

export default {
  name: "Vencimento",

  mounted() {
    if (localStorage.players) this.players = JSON.parse(localStorage.players);
    if (localStorage.rodadaAtual)
      this.rodadaAtual = JSON.parse(localStorage.rodadaAtual);
  },
  data() {
    return {
      players: [],
      vencimento: {
        produto: {}
      },
      rodadaAtual: 1,
      vencedor: null,
      showVencedor: false,
      finalizar: false,
      setores: [
        { id: 1, nome: "Deposito" },
        { id: 2, nome: "Freezer" },
        { id: 3, nome: "Material de Limpeza" }
      ]
    };
  },
  computed: {
    ended: function() {
      let withPoints = this.players.filter(p => p.points > 0);
      return withPoints.length > 1 ? false : withPoints[0];
    }
  },
  methods: {
    getProduto: function(evt) {
      console.log(this.vencimento.produto.codigo);
      $produtos
        .search({ codigo: this.vencimento.produto.codigo, size: 1 })
        .then(res => {
          if (res && res.id) {
              this.vencimento.produto = res;
          }
        });
    },
    registerVencimento: function(evt) {
      console.log(evt);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  text-align: left;
}
tfoot td {
  text-align: right;
}

td:first-child,
th:first-child {
  max-width: 50px !important;
}

td button {
  padding: 0px 5px !important;
  margin: 0;
}
.restart-button {
  float: left;
}

.winner {
  display: inline-block;
}
input[type="date"] {
  webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: 0.6rem 1rem;
  width: 100%;
}

.full-width {
  clear: both;
}

.quarter-width,
.three-quarter-width,
.half-width,
.three-quarter-width {
  padding: 0px 5px;
  float: left;
}

.three-quarter-width {
  width: 75%;
}
.quarter-width {
  width: 25%;
}
.half-width {
  width: 50%;
}
</style>
