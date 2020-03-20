<template>
<ul class="nav-mobile check">
  <li class="logo"><img href="#" class="logoicon" src="../assets/icon.svg">{{ logoname }}</li>
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
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-p</title><circle cx="256" cy="256" r="36"/><path d="M190.24,341.77a22,22,0,0,1-16.46-7.38,118,118,0,0,1,0-156.76,22,22,0,1,1,32.87,29.24,74,74,0,0,0,0,98.29,22,22,0,0,1-16.43,36.61Z"/><path d="M321.76,341.77a22,22,0,0,1-16.43-36.61,74,74,0,0,0,0-98.29,22,22,0,1,1,32.87-29.24,118,118,0,0,1,0,156.76A22,22,0,0,1,321.76,341.77Z"/><path d="M139.29,392.72a21.92,21.92,0,0,1-16.08-7,190,190,0,0,1,0-259.49,22,22,0,1,1,32.13,30.06,146,146,0,0,0,0,199.38,22,22,0,0,1-16.06,37Z"/><path d="M372.71,392.72a22,22,0,0,1-16.06-37,146,146,0,0,0,0-199.38,22,22,0,1,1,32.13-30.06,190,190,0,0,1,0,259.49A21.92,21.92,0,0,1,372.71,392.72Z"/><path d="M429,438a22,22,0,0,1-16.39-36.67,218.34,218.34,0,0,0,0-290.66,22,22,0,0,1,32.78-29.34,262.34,262.34,0,0,1,0,349.34A22,22,0,0,1,429,438Z"/><path d="M83,438a21.94,21.94,0,0,1-16.41-7.33,262.34,262.34,0,0,1,0-349.34,22,22,0,0,1,32.78,29.34,218.34,218.34,0,0,0,0,290.66A22,22,0,0,1,83,438Z"/>
        </svg>
        <a href="#">Streams</a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-q</title>
          <path d="M256,368a16,16,0,0,1-7.94-2.11L108,285.84a8,8,0,0,0-12,6.94V368a16,16,0,0,0,8.23,14l144,80a16,16,0,0,0,15.54,0l144-80A16,16,0,0,0,416,368V292.78a8,8,0,0,0-12-6.94L263.94,365.89A16,16,0,0,1,256,368Z" />
          <path
            d="M495.92,190.5s0-.08,0-.11a16,16,0,0,0-8-12.28l-224-128a16,16,0,0,0-15.88,0l-224,128a16,16,0,0,0,0,27.78l224,128a16,16,0,0,0,15.88,0L461,221.28a2,2,0,0,1,3,1.74V367.55c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,496,368V192A14.76,14.76,0,0,0,495.92,190.5Z" />
        </svg>
        <a href="#">Classroom</a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-l</title><path d="M64,480H48a32,32,0,0,1-32-32V112A32,32,0,0,1,48,80H64a32,32,0,0,1,32,32V448A32,32,0,0,1,64,480Z"/><path d="M240,176a32,32,0,0,0-32-32H144a32,32,0,0,0-32,32v28a4,4,0,0,0,4,4H236a4,4,0,0,0,4-4Z"/><path d="M112,448a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V418a2,2,0,0,0-2-2H114a2,2,0,0,0-2,2Z"/><rect x="112" y="240" width="128" height="144" rx="2" ry="2"/><path d="M320,480H288a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h32a32,32,0,0,1,32,32V448A32,32,0,0,1,320,480Z"/><path d="M495.89,445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85,3c-17.59,1.67-30.65,15.71-29.17,31.36l32.23,340c1.48,15.65,16.94,27,34.53,25.31l31.85-3C484.31,475.14,497.37,461.1,495.89,445.45Z"/>
        </svg>
        <a href="#">Homeworks</a>
      </li>
      <li>
        <input type="checkbox" id="sub-one" class="submenu-toggle">
        <label class="submenu-label" for="sub-one">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <title>ionicons-v5-o</title><line x1="160" y1="144" x2="448" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="160" y1="256" x2="448" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="160" y1="368" x2="448" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
          </svg>
          <a>Curriculum</a>
        </label>
        <div class="arrow right">&#8250;</div>
        <ul class="menu-sub">
          <li class="menu-sub-title">
            <label class="submenu-label" for="sub-one">Back</label>
            <div class="arrow left">&#8249;</div>
          </li>
          <li>
            <svg class="menu-icon" width="512" height="512" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
             <path d="m270.941 464.066c.005 0 .053-.013.059-.013v-359.957c-5.971-3.052-70.608-54.586-165.209-59.59l-15.791-.82v360.059l14.282.688c102.92 4.912 154.428 53.399 166.659 59.633z"/>
             <path d="m301 97.724v360.14c22.513-3.966 55.939-8.304 96.021-8.005 62.986 0.469 102.82 11.926 114.98 13.889v-359.8c-4.937-0.551-49.829-13.722-114.98-14.504-28.424-0.342-60.975 1.828-96.021 8.279zm45 259.39v-176.04l132.04 88.022z"/>
             <path d="m376 237.12v63.955l47.959-31.977z"/>
             <path d="m190.11 452.54c-22.348-8.888-51.629-16.439-87.266-18.135l-42.847-2.065v-337.22c-34.493 5.127-52.932 10.668-60 12.259v360.94l18.633-4.673c55.651-13.896 114.59-17.522 171.48-11.104z"/>
            </svg>
            <a href="#">Lessons</a>
          </li>
          <li>
            <svg class="menu-icon" width="512" height="512" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
             <path d="m365.14 9.215v96.569h87.511z"/>
             <path d="m350.14 135.78c-8.284 0-15-6.716-15-15v-120.78h-241.02c-23.776 0-43.12 19.344-43.12 43.12v425.76c0 23.776 19.344 43.12 43.12 43.12h323.76c23.776 0 43.12-19.344 43.12-43.12v-333.1zm-12.824 71.42c5.857-5.857 15.355-5.857 21.213 0l8.776 8.776 31.464-31.464c5.857-5.857 15.355-5.857 21.213 0s5.858 15.355 0 21.213l-42.07 42.07c-2.929 2.929-6.768 4.394-10.606 4.394s-7.678-1.465-10.606-4.394l-19.383-19.383c-5.858-5.856-5.858-15.354-1e-3 -21.212zm0 102.01c5.857-5.857 15.355-5.857 21.213 0l8.776 8.776 31.464-31.464c5.857-5.857 15.355-5.857 21.213 0s5.858 15.355 0 21.213l-42.07 42.07c-2.929 2.929-6.768 4.394-10.606 4.394s-7.678-1.465-10.606-4.394l-19.383-19.383c-5.858-5.856-5.858-15.355-1e-3 -21.212zm-212.75-258.19h46.953c8.284 0 15 6.716 15 15s-6.716 15-15 15h-46.953c-8.284 0-15-6.716-15-15s6.715-15 15-15zm0 52.101h102.05c8.284 0 15 6.716 15 15s-6.716 15-15 15h-102.05c-8.284 0-15-6.716-15-15s6.715-15 15-15zm154.92 332.12h-154.92c-8.284 0-15-6.716-15-15s6.716-15 15-15h154.92c8.284 0 15 6.716 15 15s-6.716 15-15.001 15zm0-98.474h-154.92c-8.284 0-15-6.716-15-15s6.716-15 15-15h154.92c8.284 0 15 6.716 15 15s-6.716 15-15.001 15zm0-102.01h-154.92c-8.284 0-15-6.716-15-15s6.716-15 15-15h154.92c8.284 0 15 6.716 15 15s-6.716 15-15.001 15zm140.5 171.46-42.07 42.069c-2.929 2.929-6.768 4.394-10.606 4.394-3.839 0-7.677-1.464-10.606-4.394l-19.383-19.383c-5.858-5.857-5.858-15.355 0-21.213 5.857-5.857 15.355-5.857 21.213 0l8.776 8.776 31.464-31.463c5.858-5.858 15.354-5.858 21.213 0 5.856 5.859 5.856 15.357-1e-3 21.214z"/>
            </svg>
            <a href="#">Exams</a>
          </li>
          <li>
            <svg class="menu-icon" width="512" height="512" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
             <path d="m319.16 360.37v74.897l-63.162-31.581-63.16 31.581v-74.953l-154.51-101.79v253.47h435.33v-253.45z"/>
             <path d="m192.84 324.39v-39.107c-35.053-21.377-58.506-59.977-58.506-103.95 0-67.087 54.579-121.67 121.67-121.67 67.088 0 121.67 54.58 121.67 121.67 0 43.975-23.452 82.575-58.506 103.95v39.159l124.78-82.231 0.316-242.21h-376.42l-0.316 241.82z"/>
             <path d="m289.16 298.41c-10.546 2.991-21.67 4.594-33.161 4.594s-22.615-1.603-33.16-4.594v88.323l33.16-16.58 33.161 16.58z"/>
             <path d="m256 273c50.545 0 91.667-41.122 91.667-91.667s-41.122-91.666-91.667-91.666-91.666 41.122-91.666 91.666 41.122 91.667 91.666 91.667zm-27.459-140h44.252v96.675h-30v-66.675h-14.252z"/>
            </svg>
            <a href="#">Grades</a>
          </li>
        </ul>
      </li>
      <li>
        <svg class="menu-icon" width="512" height="512" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
         <title>ionicons-v5-q</title>
         <circle cx="256" cy="256" r="48"/>
         <path d="M470.39,300l-.47-.38-31.56-24.75a16.11,16.11,0,0,1-6.1-13.33l0-11.56a16,16,0,0,1,6.11-13.22L469.92,212l.47-.38a26.68,26.68,0,0,0,5.9-34.06l-42.71-73.9a1.59,1.59,0,0,1-.13-.22A26.86,26.86,0,0,0,401,92.14l-.35.13L363.55,107.2a15.94,15.94,0,0,1-14.47-1.29q-4.92-3.1-10-5.86a15.94,15.94,0,0,1-8.19-11.82L325.3,48.64l-.12-.72A27.22,27.22,0,0,0,298.76,26H213.24a26.92,26.92,0,0,0-26.45,22.39l-.09.56-5.57,39.67A16,16,0,0,1,173,100.44c-3.42,1.84-6.76,3.79-10,5.82a15.92,15.92,0,0,1-14.43,1.27l-37.13-15-.35-.14a26.87,26.87,0,0,0-32.48,11.34l-.13.22L35.71,177.9A26.71,26.71,0,0,0,41.61,212l.47.38,31.56,24.75a16.11,16.11,0,0,1,6.1,13.33l0,11.56a16,16,0,0,1-6.11,13.22L42.08,300l-.47.38a26.68,26.68,0,0,0-5.9,34.06l42.71,73.9a1.59,1.59,0,0,1,.13.22A26.86,26.86,0,0,0,111,419.86l.35-.13,37.07-14.93a15.94,15.94,0,0,1,14.47,1.29q4.92,3.11,10,5.86a15.94,15.94,0,0,1,8.19,11.82l5.56,39.59.12.72A27.22,27.22,0,0,0,213.24,486h85.52a26.92,26.92,0,0,0,26.45-22.39l.09-.56,5.57-39.67a16,16,0,0,1,8.18-11.82c3.42-1.84,6.76-3.79,10-5.82a15.92,15.92,0,0,1,14.43-1.27l37.13,14.95.35.14a26.85,26.85,0,0,0,32.48-11.34,2.53,2.53,0,0,1,.13-.22l42.71-73.89A26.7,26.7,0,0,0,470.39,300ZM335.91,259.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,259.76Z"/>
        </svg>
        <a href="#">Settings</a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-e</title><path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z"/>
        </svg>
        <a href="#">About</a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
          <title>ionicons-v5-o</title><path d="M160,256a16,16,0,0,1,16-16H320V136c0-32-33.79-56-64-56H104a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H264a56.06,56.06,0,0,0,56-56V272H176A16,16,0,0,1,160,256Z"/><path d="M459.31,244.69l-80-80a16,16,0,0,0-22.62,22.62L409.37,240H320v32h89.37l-52.68,52.69a16,16,0,1,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62Z"/>
        </svg>
        <a href="#">Exit</a>
      </li>
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
    path { fill: $white; }
    &.icon-close {
      display: none;
      padding: 15px;
    }
  }

  .menu-icon {
    path { fill: $gray; }
  }

  li {
    width: 100%;
    height: 50px;
    line-height: 51px;
    text-align: center;
    float: left;
    display: flex;

    a {
      display: block;
      color: #333;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  }

  .logo {
    display: block;
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
          display: flex;
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
