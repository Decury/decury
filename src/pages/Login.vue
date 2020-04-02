<template>
<div id="login">
  <div class="upper-container">
    <h1 class="formtitle">Login</h1>
    <h3 class="formsubtitle">Login to your virtual classroom.</h3>
  </div>
  <div class="lower-container">
    <label class="textfield logininput">
      <input type="text" name="username" v-model="input.username" placeholder=" ">
      <span>Username</span>
    </label>
    </br>
    <label class="textfield logininput">
      <input type="password" name="password" v-model="input.password" placeholder=" ">
      <span>Password</span>
    </label>
    </br>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({
            name: "secure"
          });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/_variables.scss';
#login {
    width: 25%;
    height: 70%;
    margin-right: auto;
    margin-left: auto;
    transition: 0.3s;
    border-radius: 5px;
    display: block;
    text-align: center;
    background-color: $white;
    margin-top: 100px;
    margin-bottom: -25px;
    box-shadow: 0 2px 24px 0 rgba(88, 69, 164, 0.11);
}

.formtitle {
    padding-top: 15px;
}

.formsubtitle {
    font-size: 15px;
    color: lightgrey;
    margin-top: -13px;
}

.logininput {
  margin-bottom:20px;
}

.upper-container {
    height: 100px;
    width: 100%;
    background: $primary-color;
    display: block;
    border-radius: 5px;
}

.lower-container {
    text-align: center;
    background: $white;
    padding-top: 10px;
    margin: 20px;
}


.lower-container button {
    background: $primary-color;
    border-color: transparent;
    color: $white;
    cursor: pointer;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    transition: 0.2s;
}

.lower-container button:hover {
    transform: scale(0.95);
    transition: 0.3s;
}

h1 {
    color: $white;
    padding-top: 10px;
    padding-left: 5px;
}

@media only screen and (max-width: 1400px) {
    #login {
        width: 35%;
    }
}

@media only screen and (max-width: 1200px) {
    #login {
        width: 55%;
    }
}

@media only screen and (max-width: 890px) {
    #login {
        width: 60%;
    }
}

@media only screen and (max-width: 886px) {
    #login {
        width: 70%;
    }
}

@media screen and (max-width: 600px) {
    #login {
        width: 80%;
    }
}

.textfield {
    position: relative;
    display: block;
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
}

/* Input, Textarea */
.textfield > input,
.textfield > textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.3);
    border-radius: 5px 5px 0 0;
    padding: 0 12px 10px;
    width: 100%;
    height: inherit;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.04);
    box-shadow: none;
    /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: rgb(var(--pure-material-primary-rgb, 88, 69, 164));
    transition: border-bottom 0.2s, background-color 0.2s;
}

/* Span */
.textfield > input + span,
.textfield > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    padding: 7px 12px 0;
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
}

/* Underline */
.textfield > input + span::after,
.textfield > textarea + span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(var(--pure-material-primary-rgb, 88, 69, 164));
    transform-origin: bottom center;
    transform: scaleX(0);
    transition: transform 0.3s;
}

/* Hover */
.textfield > input:hover,
.textfield > textarea:hover {
    border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.5);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.08);
}

/* Placeholder-shown */
.textfield > input:not(:focus):placeholder-shown + span,
.textfield > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 48px;
}

/* Focus */
.textfield > input:focus,
.textfield > textarea:focus {
    outline: none;
}

.textfield > input:focus + span,
.textfield > textarea:focus + span {
    color: rgb(var(--pure-material-primary-rgb, 88, 69, 164));
}

.textfield > input:focus + span::before,
.textfield > textarea:focus + span::before {
    opacity: 0.12;
}

.textfield > input:focus + span::after,
.textfield > textarea:focus + span::after {
    transform: scale(1);
}

/* Disabled */
.textfield > input:disabled,
.textfield > textarea:disabled {
    border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.24);
}

.textfield > input:disabled + span,
.textfield > textarea:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
}

/* Faster transition in Safari for less noticable fractional font-size issue */
@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .textfield > input,
        .textfield > input + span,
        .textfield > input + span::after,
        .textfield > textarea,
        .textfield > textarea + span,
        .textfield > textarea + span::after {
            transition-duration: 0.1s;
        }
    }
}
</style>
