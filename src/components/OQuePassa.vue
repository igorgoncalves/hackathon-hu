<template>
 <div class="oquepassa layout justify-center">
    <v-layout
    justify-center
    align-center>
      <div v-if="first" class="page1">
        <h2>Como se sente hoje?</h2>

        <div class="faces">
          <label><input v-model="el" value="1" type="radio"><img src="../assets/1.svg" alt="" srcset=""/></label>
          <label><input v-model="el" value="2" type="radio"><img src="../assets/2.svg" alt="" srcset=""/></label>
          <label><input v-model="el" value="3" type="radio"><img src="../assets/3.svg" alt="" srcset=""/></label>
          <label><input v-model="el" value="4" type="radio"><img src="../assets/4.svg" alt="" srcset=""/></label>
          <label><input v-model="el" value="5" type="radio"><img src="../assets/5.svg" alt="" srcset=""/></label>
        </div>
        <div class="buttons">
          <v-btn @click.native="first = false" class="btn-action">Pŕoximo</v-btn>
        </div>
      </div>
      <div v-else class="page2">
        <h3>Poderia descrever o que está sentindo?</h3>
        <v-text-field   class="violet-border"
                        v-model="descricao"
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
    </v-layout>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal'

export default {
  components: { MyModal },
  data () {
    return  {
      el: 0,
      descricao: "",
      first: true,
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

h2 {
  color: #484E96;
}
img {
  max-width: 250px;
}
.faces img {
  width: 45px;
  margin: 0 5px
}
textarea {
  color: white;
}

.faces{
  margin: 20px auto;
}

label > input{ /* HIDE RADIO */
  visibility: hidden; /* Makes input not-clickable */
  position: absolute; /* Remove input from document flow */
}
label > input + img{ /* IMAGE STYLES */
  cursor:pointer;
  border:2px solid transparent;
}
label > input:checked + img { /* (RADIO CHECKED) IMAGE STYLES */
  width: 55px
}

</style>


