<template>
<ul class="nav-mobile check">
  <li class="logo">{{ logoname }}</li>
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
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M326.1,231.9l-47.5,75.5a31,31,0,0,1-7,7,30.11,30.11,0,0,1-35-49l75.5-47.5a10.23,10.23,0,0,1,11.7,0A10.06,10.06,0,0,1,326.1,231.9Z"/><path d="M256,64C132.3,64,32,164.2,32,287.9A223.18,223.18,0,0,0,88.3,436.4c1.1,1.2,2.1,2.4,3.2,3.5a25.19,25.19,0,0,0,37.1-.1,173.13,173.13,0,0,1,254.8,0,25.19,25.19,0,0,0,37.1.1l3.2-3.5A223.18,223.18,0,0,0,480,287.9C480,164.2,379.7,64,256,64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="128" x2="256" y2="160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><line x1="416" y1="288" x2="384" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><line x1="128" y1="288" x2="96" y2="288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><line x1="165.49" y1="197.49" x2="142.86" y2="174.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><line x1="346.51" y1="197.49" x2="369.14" y2="174.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/>
        </svg>
        <a href="#"><router-link to="/Dashboard">Dashboard</router-link></a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-p</title><circle cx="256" cy="256.02" r="32"/><path d="M184.25,192.25a96,96,0,0,0,0,127.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M327.77,319.77a96,96,0,0,0,0-127.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M133.28,141.28a168,168,0,0,0,0,229.44" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M378.72,370.72a168,168,0,0,0,0-229.44" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M435,416a240.34,240.34,0,0,0,0-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M77,96a240.34,240.34,0,0,0,0,320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
        </svg>
        <a href="#"><router-link to="/Streams">Streams</router-link></a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-q</title><polygon points="32 192 256 64 480 192 256 320 32 192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="112 240 112 368 256 448 400 368 400 240" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="480" y1="368" x2="480" y2="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="256" y1="320" x2="256" y2="448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
        </svg>
        <a href="#"><router-link to="/Classroom">Classroom</router-link></a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-l</title><rect x="32" y="96" width="64" height="368" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="224" x2="240" y2="224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="400" x2="240" y2="400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="112" y="160" width="128" height="304" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"/><rect x="256" y="48" width="96" height="416" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"/><path d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"/>
        </svg>
        <a href="#"><router-link to="/Homeworks">Homeworks</router-link></a>
      </li>
      <li>
        <input type="checkbox" id="sub-one" class="submenu-toggle">
        <label class="submenu-label" for="sub-one">
          <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-o</title><line x1="160" y1="144" x2="448" y2="144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="160" y1="256" x2="448" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="160" y1="368" x2="448" y2="368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
          </svg>
          <a><div class="arrow right">&#8250;</div> Curriculum</a>
        </label>
        <ul class="menu-sub">
          <li class="menu-sub-title">
            <label class="submenu-label" for="sub-one"><div class="arrow left">&#8249;</div> Back</label>
          </li>
          <li>
            <svg class="menu-icon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m331 356.751 133.25-87.857-133.25-87.857zm30-120 48.75 32.143-48.75 32.143z"/><path d="m258.857 102.772c-4.819-2.322-74.558-58.878-183.857-58.878h-15v50.789c-31.82 4.739-53.099 10.908-60 12.499v360.923c10.491-1.418 115.881-38.778 252.362-4.66l3.638.91 3.638-.91c136.637-34.159 241.824 3.235 252.362 4.66v-360.923c-6.95-.924-115.604-36.868-253.143-4.41zm-228.857 327.283v-299.301c9.922-2.223 19.947-4.134 30-5.727v278.867h15c32.339 0 64.742 5.675 95.207 16.398-46.879-3.165-94.164.084-140.207 9.763zm211-8.989c-44.906-27.861-97.703-44.208-151-46.806v-299.962c90.301 4.857 146.383 50.327 151 52.624zm241 8.989c-69.395-14.588-141.607-14.588-211 0v-299.301c69.271-15.524 141.728-15.524 211 0z"/></g>
            </svg>
            <a href="#"><router-link to="/Lessons">Lessons</router-link></a>
          </li>
          <li>
            <svg class="menu-icon" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path
              d="m457.115 110.712-95.861-105.784c-2.843-3.138-6.88-4.928-11.115-4.928h-256.019c-23.776 0-43.12 19.344-43.12 43.12v425.76c0 23.776 19.344 43.12 43.12 43.12h323.76c23.776 0 43.12-19.344 43.12-43.12v-348.096c0-3.723-1.385-7.313-3.885-10.072zm-91.976-56.821 47.025 51.893h-47.025zm52.741 428.109h-323.76c-7.234 0-13.12-5.886-13.12-13.12v-425.76c0-7.234 5.886-13.12 13.12-13.12h241.019v90.784c0 8.284 6.716 15 15 15h80.861v333.096c0 7.234-5.886 13.12-13.12 13.12z"/><path
              d="m340.996 241.403c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l42.07-42.07c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-31.464 31.464-8.776-8.776c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213z"/><path
              d="m340.996 343.416c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394l42.07-42.07c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-31.464 31.464-8.776-8.776c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213z"/><path
              d="m383.066 378.607-31.464 31.463-8.776-8.776c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213l19.383 19.383c2.929 2.93 6.767 4.394 10.606 4.394 3.838 0 7.678-1.465 10.606-4.394l42.07-42.069c5.858-5.857 5.858-15.355 0-21.213-5.858-5.859-15.354-5.859-21.212-.001z"/><path d="m279.481 194.762h-154.92c-8.284 0-15 6.716-15 15s6.716 15 15 15h154.92c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m279.481 296.774h-154.92c-8.284 0-15 6.716-15 15s6.716 15 15 15h154.92c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m279.481 395.248h-154.92c-8.284 0-15 6.716-15 15s6.716 15 15 15h154.92c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m124.561 91.027h46.953c8.284 0 15-6.716 15-15s-6.716-15-15-15h-46.953c-8.284 0-15 6.716-15 15s6.715 15 15 15z"/><path d="m124.561 143.128h102.054c8.284 0 15-6.716 15-15s-6.716-15-15-15h-102.054c-8.284 0-15 6.716-15 15s6.715 15 15 15z"/>
            </svg>
            <a href="#"><router-link to="/Exams">Exams</router-link></a>
          </li>
          <li>
            <svg class="menu-icon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.097 242.299.316-242.299h-386.738l-.316 242.299h-24.026v269.701h435.333v-269.701zm-29.723-212.299-.298 228.581-99.915 65.847v-39.142c35.053-21.377 58.506-59.978 58.506-103.953 0-67.087-54.579-121.666-121.667-121.666-67.087 0-121.666 54.58-121.666 121.666 0 43.976 23.452 82.575 58.506 103.953v39.124l-100.502-66.211.298-228.199zm-163.375 340.149-33.16 16.58v-88.323c10.546 2.991 21.669 4.594 33.16 4.594s22.615-1.603 33.161-4.594v88.323zm-91.666-188.816c0-50.545 41.121-91.666 91.666-91.666s91.667 41.122 91.667 91.666-41.122 91.667-91.667 91.667-91.666-41.122-91.666-91.667zm28.506 179.003v74.935l63.16-31.58 63.161 31.58v-74.915l124.506-82.052v203.696h-375.332v-203.69z"/><path d="m242.792 229.671h30.001v-96.675h-44.253v30h14.252z"/></g>
            </svg>
            <a href="#"><router-link to="/Grades">Grades</router-link></a>
          </li>
        </ul>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
        </svg>
        <a href="#"><router-link to="/Settings">Settings</router-link></a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"/><polyline points="220 220 252 220 252 336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="208" y1="340" x2="296" y2="340" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z"/>
        </svg>
        <a href="#"><router-link to="/About">About</router-link></a>
      </li>
      <li>
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-o</title><path d="M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><polyline points="368 336 448 256 368 176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="176" y1="256" x2="432" y2="256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
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
