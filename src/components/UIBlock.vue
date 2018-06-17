<template>
 <div class="uiblock">
   <div class="panel">

      <img src="../assets/pumpgirl2.gif" alt="" srcset="">
      <img src="../assets/loading.svg" alt="" srcset="">

   </div>
 </div>
</template>

<script>
export default {
  name: 'UIBlock',
  props: ['activate'],
  data () {
    return {
      visible: this.activate
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel {
    position:fixed;
    top:0;
    left:0;
    background: #560562;
    z-index:5; width:100%; height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .img-container{
    display: flex;
  }
</style>
