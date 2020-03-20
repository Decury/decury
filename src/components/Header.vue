<template>
<ul class="nav-mobile check">
  <li><img href="#" class="logoicon" src="../assets/icon.svg">{{ logoname }}</li>
  <li class="menu-container">
    <input id="menu-toggle" type="checkbox">
    <label for="menu-toggle" class="menu-button">
      <svg class="icon-open" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
      <svg class="icon-close" viewBox="0 0 100 100">
        <path
          d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z" />
      </svg>
    </label>
    <ul class="menu-sidebar">
      <li><a href="#">Streams</a></li>
      <li><font-awesome-icon icon="school"/><a href="#">Classroom</a></li>
      <li><a href="#">Homeworks</a></li>
      <li>
        <input type="checkbox" id="sub-one" class="submenu-toggle">
        <label class="submenu-label" for="sub-one">Curriculum</label>
        <div class="arrow right">&#8250;</div>
        <ul class="menu-sub">
          <li class="menu-sub-title">
            <label class="submenu-label" for="sub-one">Back</label>
            <div class="arrow left">&#8249;</div>
          </li>
          <li><a href="#">Lessons</a></li>
          <li><a href="#">Exams</a></li>
          <li><a href="#">Grades</a></li>
        </ul>
      </li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Exit</a></li>
    </ul>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Header',
  props: {
    logoname: String
  }
}
</script>

<style lang="scss" scoped>
/*#5845a4*/
@import '../assets/stylesheet/_variables.scss';
.nav-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: $primary-color;
  color: $white;
  font-family: HammersmithOne;
  padding: 0;
  margin: 0;
  cursor: auto;
  font-size: 20px;
  list-style-type: none;
  z-index: 999999;
  box-shadow: 0 5px 5px -5px #333;
  &:after { content: ""; display: table; clear: both; }
  svg {
    height: 50px;
    width: 65px;
    padding: 9px;
    path { fill: #fff; }
    &.icon-close {
      display: none;
      padding: 15px;
    }
  }

  li {
    width: 100%;
    height: 50px;
    line-height: 51px;
    text-align: center;
    float: left;

    a {
      display: block;
      color: #333;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }
  .logoicon {
    height: 30px;
    position: relative;
    top: 5px;
    left: 0;
    width: auto;
    margin: 0 5px;
  }
  .menu-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;
    display: block;
    &:after {
      opacity: 0;
      top: 50px;
      content: "";
      width: 100vw;
      display: block;
      position: fixed;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      content: "";
      z-index: 9;
      pointer-events: none;
      transition: opacity 0.2s cubic-bezier(0,0,0.3,1);
      transition-delay: 0.1s;
    }
  }
  #menu-toggle {
    display: none;
    &.active ~ .menu-button,
    &:checked ~ .menu-button {
      .icon-close { display: block; }
      .icon-open { display: none; }
      &:after {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
      }
    }
    &.active ~ .menu-sidebar,
    &:checked ~ .menu-sidebar {
      transform: translateX(0);
      transition: transform 0.3s cubic-bezier(0,0,0.3,1);
    }
  }
  .menu-container {
    width: 65px;
    float: left;
    cursor: pointer;
    position: absolute;
    .menu-sidebar {
      box-shadow: 5px 0 5px -5px #333;
      display: block;
      width: 65vw;
      bottom: 0;
      background: white;
      color: #333;
      position: fixed;
      z-index: 9999999;
      transform: translateX(-405px);
      transition: transform 0.3s cubic-bezier(0,0,0.3,1);
      top: 50px;
      list-style-type: none;
      padding: 0;
      max-width: 400px;
      .arrow {
        position: absolute;
        line-height: 50px;
        font-size: 32px;
        color: #555;
        top: 0;
        z-index: 0;
        &.left { left: 25px; }
        &.right { right: 25px; }
      }
      li {
        height: 55px;
        line-height: 55px;
        font-size: 16px;
        text-align: left;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        padding-left: 20px;
        &:hover { background: #eee; }
        .menu-sub {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 0;
          overflow: hidden;
          background: white;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0,0,0.3,1);
          border-left: 1px solid #ccc;
          list-style-type: none;
          padding: 0;
          margin: 0;
          z-index: 2;
          max-width: 400px;
          li { overflow: hidden; }
          .menu-sub-title { padding-left: 50px; }
         }
        .submenu-label {
          cursor: pointer;
          width: 100%;
          height: 100%;
          display: block;
        }
        .submenu-toggle {
          display: none;
          &.active ~ .menu-sub,
          &:checked ~ .menu-sub {
            width: 65vw;
            visibility: visible;
            z-index: 1;
            transition: width 0.35s cubic-bezier(0,0,0.3,1);
          }
        }
      }
    }
  }
}



</style>
