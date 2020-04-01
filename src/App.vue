<template>
  <div id="app">
    <title>{{ title }}</title>
    <Header v-bind:logoname="title"></Header>
    <body>
      <router-view></router-view>
    </body>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Fonts from './components/Fonts.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
    title: 'School Name | Decury'
    }
  }
}
</script>

<style lang="scss">
@import './assets/stylesheet/_variables.scss';
body,
html {
    margin: 0;
    font-family: OpenSans;
    height: 100vh;
    background: $white;
    color: $gray;
}

body {
    padding: 10px;
}

*,
*:after,
*:before {
    box-sizing: border-box;
}
</style>
