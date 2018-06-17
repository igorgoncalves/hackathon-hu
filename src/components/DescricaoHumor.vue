<template>
  <div class="oquepassa  layout justify-center">
      <div class="page">
        <h3>Poderia descrever o que está sentindo?</h3>
        <v-text-field   class="violet-border"
                        v-model="title"
                        :counter="120"
                        :rules="[(v) => v.length <= 120 || 'Max 120 characters']"
                        full-width
                        multi-line
                        single-line
                      ></v-text-field>
        <div class="buttons">
            <v-btn @click="submitDescription()" class="btn-action">Confirmar</v-btn>
        </div>
        </div>
      <MyModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Fico feliz por ter respondido {{ $route.params.humor }}</h3>
      <img slot="body" src="https://media1.giphy.com/media/l0IykwxxedIsEXpF6/giphy.gif" alt="">
    </MyModal>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal'

export default {
  components: { MyModal },
  data () {
    return  {
      valid: false,
      title:"",
      showModal: false
    }
  },
  methods: {
    submitDescription: function() {
      this.showModal = true
    }
  }
}

</script>


<style scoped>

h3 {
  color: #484E96;
}
img {
  max-width: 250px;

}
textarea {
  color: white;
}


.faces{
  margin: 20px 0px;
}

</style>


