import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import OQuePassa from '@/components/OQuePassa'
import DescricaoHumor from '@/components/DescricaoHumor'
import Locais from '@/components/Locais'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/meu-humor', component: OQuePassa },
    { path: '/o-que-estou-sentindo', component: DescricaoHumor },
    { path: '/me-encontra', component: Locais }
  ]
})
