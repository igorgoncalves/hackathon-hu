<template>
  <div id="home">
 <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Notificações</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile v-else :key="item.title" avatar >
                <v-list-tile-avatar>
                  <img :src="item.gif">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.msg"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Firebase from 'firebase/app'
import 'firebase/database';

let config = {
      apiKey: "AIzaSyASR87TrTIzStdqTKAvl11DzYIU0_45g6w",
      authDomain: "roubos-ufs.firebaseapp.com",
      databaseURL: "https://roubos-ufs.firebaseio.com",
      projectId: "roubos-ufs",
      storageBucket: "",
      messagingSenderId: "756499998979",
    };

let app = Firebase.initializeApp(config)
let db = app.database()

let refRecord = db.ref('registros')

export default {
  name: 'home',
  components: {
  },
  firebase: {
    frecord: {
      source: refRecord,
      asObject: true,
      readyCallback(snap){
        let ob = snap.val();
        this.items = Object.keys(ob).map(i => ob[i])
        // eslint-disable-next-line
        console.log(this.items)
      }
    }
  },
  data () {
    return {
      items: null,
      lastDate: "",
      days: 0,

    }
  },
}
</script>

<style>
html, body, #home, main {
  background: white;
  color: #e67e22;
}

.btn-action {
  background-color: #8e44ad !important;
  color: white !important;
}
</style>
