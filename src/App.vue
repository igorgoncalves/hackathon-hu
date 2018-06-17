<template>
  <div id="app">
    <v-app>
    <!-- <v-content>
      <v-container fluid fill-height>
         <v-layout
        > -->
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <!-- </v-layout>
    </v-container>
    </v-content> -->
    <v-bottom-nav :value="true" :active.sync="e1" absolute color="transparent">
        <v-btn flat color="teal" value="recent" @click="goTo('/')">
          <span>Inicio</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="favorites"  @click="goTo('/meu-humor')">
          <span>Registro diário</span>
          <v-icon>history</v-icon>

        </v-btn>
        <v-btn flat color="teal" value="nearby" @click="goTo('/me-encontra')">
          <span>Quer me encontrar?</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return  {
       drawer: false,
       e1: 'recent'
    }
  },
  methods: {
    goTo: function (from) {
      this.$router.push({path: from})
      this.el = from
    }
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}

</script>

<style>
#app, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cornsilk;

}
</style>
