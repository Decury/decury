<template>
  <body>
    <div class="profile">
      <div><img class="user" src="../assets/user.jpg"></div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Body'
  }
</script>

<style lang="scss">
@import '../assets/stylesheet/_variables.scss';
body, html {
margin: 0;
font-family: OpenSans;
height: 100vh;
background: $white;
}

*, *:before, *:after {
box-sizing: border-box;
}
</style>

<style scoped>

.profile {
  margin-left: auto ;
  margin-right: auto ;
  position: relative;
  width: 80%;
  margin-top: 60px;
  height: 80px;
  background: gray;
}

.user {
  border-radius: 50%;
  height: 50px;
  margin: 15px 5px;
}
</style>
