<template>
  <div id="app">
    <title>{{ title }}</title>
    <Header title="Decury"></Header>
    <Body><Body/>
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
    Body
  },
  data() {
    return {
    title: 'Decury'
    }
  }
}
</script>

<style>
html {
  font-family: 'HammersmithOne'
}

body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
</style>
