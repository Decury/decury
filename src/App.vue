<template>
<div id="app">
  <title>{{ title }} | Decury</title>
  <Header v-bind:logoname="title"></Header>

  <body>
    <router-view @authenticated="setAuthenticated" />
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
      title: 'School Name',
      authenticated: false,
      mockAccount: {
        username: "student",
        password: "password"
      },
      mounted() {
        if (!this.authenticated) {
          this.$router.replace({
            name: "login"
          });
        }
      },
      methods: {
        setAuthenticated(status) {
          this.authenticated = status;
        },
        logout() {
          this.authenticated = false;
        }
      }
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
    margin-bottom: 40px;
}

*,
*:after,
*:before {
    box-sizing: border-box;
}
</style>
