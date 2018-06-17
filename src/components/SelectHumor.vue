<template>
 <div class="uiblock">
   <div class="faces">
    <button @click="selec(1)"><img src="../assets/1.svg" alt="" srcset=""></button>
    <button @click="selec(2)"><img src="../assets/2.svg" alt="" srcset=""></button>
    <button @click="selec(3)"><img src="../assets/3.svg" alt="" srcset=""></button>
    <button @click="selec(4)"><img src="../assets/4.svg" alt="" srcset=""></button>
    <button @click="selec(5)"><img src="../assets/5.svg" alt="" srcset=""></button>
    </div>
 </div>
</template>

<script>
export default {
  name: 'SelectHumor',
  data () {
    return {
      el: 1
    }
  },
  methods:{
    selec: function (n) {
      this.el = n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 40px;
}


</style>
