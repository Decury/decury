<template>
  <body>
    <div class="wrapper">
      <div class="box profile">
        <div><img class="user" src="../assets/user.jpg"></div>
        <div class="info">
          <a>{{ name }} {{ surname }}</a></br>
          <a>{{ classroom }}</a>
        </div>
      </div>
      <div class="box streaming">
        <div><img class="user" src="../assets/user.jpg"></div>
        <div class="info">
          <a>{{ name }} {{ surname }}</a></br>
          <a>{{ classroom }}</a>
        </div>
      </div>
      <div class="box">
        <div><img class="user" src="../assets/user.jpg"></div>
        <div class="info">
          <a>{{ name }} {{ surname }}</a></br>
          <a>{{ classroom }}</a>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Body',

    data() {
      return {
      name: 'Tan Siret',
      surname: 'Akıncı',
      room: 'A',
      grade: '10'
      }
    },

    computed: {
        classroom : function() {

           return (this.grade+"/"+this.room);
        }
     }
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

body {
  padding: 10px;
}

*, *:before, *:after {
box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
@import '../assets/stylesheet/_variables.scss';

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}
.box {
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  background: $whitebox;
  box-shadow: 5px 5px 5px #888888;
}

.profile {
  margin-top: 50px;
  grid-column: 1/4;
}
.user {
  border-radius: 50%;
  height: 50px;
  margin: 15px;
}

.info {
  display: inline-block;
  height: 100%;
  margin: 15px 0;
}
a{
  font-size: 15px;
  color: $gray;
}
</style>
