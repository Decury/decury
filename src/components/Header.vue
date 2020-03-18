<template>
  <header>
    <div class="logo"><a><img href="#" class="logoicon" src="../assets/icon.svg"></a><a class="logotitle">{{ title }}</a></div>
    <div class="header-right">
      <a href="#"><img href="#" class="menuicon" src="../assets/icons/notifications.svg"></a>
      <a href="#"><img href="#" class="menuicon" src="../assets/icons/settings.svg"></a>
      <a href="#"><img href="#" class="menuicon" src="../assets/icons/menu.svg"></a>
    </div>
    <div class="vertical-menu">
      <a href="#">Streaming</a>
      <a href="#">Homeworks</a>
      <a href="#">About</a>
      <a href="#">Quit</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String
    }
  }
</script>

<style scoped>
/*#5845a4*/
header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 51px;
  background: #5845a4;
  box-shadow: 5px 10px 18px #888888;
  width: 100%;
  box-sizing: border-box;
}

header a {
  float: left;
  color: #f5f5f5;
  text-align: center;
  padding: 5px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.logo {
  margin-left: 20px;
}
.logoicon {
  height: 40px;
  width: auto;
}

.logotitle {
  font-size: 25px !important;
  margin-top: 10px !important;
}

header a:hover {
  transition: 0.2s;
}

.header-right {
  float: right;
  margin-right: 20px;
}

.menuicon {
  height: 20px;
  margin-top: 10px;
  width: auto;
  fill: #f5f5f5;
}

.vertical-menu {
  width: 200px;
  z-index: 100;
  position: fixed;
  padding-top: 51px;
  float: right;
}

.vertical-menu a {
  background-color: #eee;
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;
}
</style>
