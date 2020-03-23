<template>
  <div id="app">
    <title>{{ title }}</title>
    <Header v-bind:logoname="title"></Header>
    <Body><Body/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
import Fonts from './components/Fonts.vue'

export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
    title: 'Decury'
    }
  }
}
</script>

<style lang="scss">
@import './assets/stylesheet/_variables.scss';

</style>
