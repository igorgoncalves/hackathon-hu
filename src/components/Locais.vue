<template>
  <div class="locais">
    <div>
      <h2>Quer me encontrar?</h2>
    </div>

    <div>
      <span class="grey--text">Você não está só, aqui você pode encontrar uma pessoa que pode te ouvir e apoiar, com segurança, sigilo e atenção.</span><br>
    </div>
    <!-- <v-card-media
    class="white--text"
    height="200px"
    src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
  > -->

    <v-btn
          class="btn-action"
          :loading="loading"
          :disabled="loading"
          @click="searchHelp()"
          color="deep-purple darken-1">Solicitar</v-btn>

    <MyModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Encontramos alguém disponível</h3>
      <div slot="body">
        <v-layout
            justify-center
            align-center>
        <v-avatar
            :size="120"
            color="grey lighten-4"
          >
            <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          </v-layout>
          <h3>João vai te encontrar em: <strong> Área de vivência da UFS</strong></h3>
      </div>
    </MyModal>

  </div>
</template>


<script>
import MyModal from '@/components/MyModal'

  export default {
    components: { MyModal },
    data () {
      return {
        loader: null,
        loading: false,
        showModal: false

      }
    },
    watch: {
        loader () {
          const l = this.loader
          this[l] = !this[l]
          this.loader = null
        }
      },
    methods: {
      searchHelp: function () {
        this.loading = true
        setTimeout(() => {
              this.loading  = false
              this.showModal = true
              }
            , 3000)
        }
    }

  }
</script>

<style>
.map {
  z-index: -100;
  position: initial !important;
}
.btn {
  position: relative;
  z-index: 10;

}


  /* This is for documentation purposes and will not be needed in your application */
.speed-dial {
    position: absolute;

  }

.btn--floating {
    position: relative;
  }

span {
  text-align: left
}

.locais {
  color: #0277bd;
  padding-left: 0;
  text-align: left;
}
</style>
