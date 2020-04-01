<template>
<div id="login">
  <div class="upper-container">
    <h1 class="formtitle">Login</h1>
    <h3 class="formsubtitle">Login to your virtual classroom.</h3>
  </div>
  <div class="lower-container">
    <label class="pure-material-textfield-filled logininput">
      <input type="text" name="username" v-model="input.username" placeholder=" ">
      <span>Username</span>
    </label>
    <label class="pure-material-textfield-filled logininput">
      <input type="password" name="password" v-model="input.password" placeholder=" ">
      <span>Password</span>
    </label>
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
    font-family: 'HammerSmithOne';
    padding-top: 15px;
}

.formsubtitle {
    color: lightgrey;
    font-family: 'HammerSmithOne';
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
    margin: 10px;
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
    font-family: 'HammerSmithOne';
}

.lower-container button:hover {}

h1 {
    color: $white;
    padding-top: 10px;
    padding-left: 5px;
}

@media only screen and (max-width: 1400px) {
    #login {
        width: 25%;
    }
}

@media only screen and (max-width: 1000px) {
    #login {
        width: 35%;
    }
}

@media only screen and (max-width: 890px) {
    #login {
        width: 40%;
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

.pure-material-textfield-filled {
    position: relative;
    display: inline-block;
    font-family: 'HammerSmithOne';
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
}

/* Input, Textarea */
.pure-material-textfield-filled > input,
.pure-material-textfield-filled > textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
    border-radius: 4px 4px 0 0;
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
.pure-material-textfield-filled > input + span,
.pure-material-textfield-filled > textarea + span {
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
.pure-material-textfield-filled > input + span::after,
.pure-material-textfield-filled > textarea + span::after {
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
.pure-material-textfield-filled > input:hover,
.pure-material-textfield-filled > textarea:hover {
    border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.08);
}

/* Placeholder-shown */
.pure-material-textfield-filled > input:not(:focus):placeholder-shown + span,
.pure-material-textfield-filled > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 48px;
}

/* Focus */
.pure-material-textfield-filled > input:focus,
.pure-material-textfield-filled > textarea:focus {
    outline: none;
}

.pure-material-textfield-filled > input:focus + span,
.pure-material-textfield-filled > textarea:focus + span {
    color: rgb(var(--pure-material-primary-rgb, 88, 69, 164));
}

.pure-material-textfield-filled > input:focus + span::before,
.pure-material-textfield-filled > textarea:focus + span::before {
    opacity: 0.12;
}

.pure-material-textfield-filled > input:focus + span::after,
.pure-material-textfield-filled > textarea:focus + span::after {
    transform: scale(1);
}

/* Disabled */
.pure-material-textfield-filled > input:disabled,
.pure-material-textfield-filled > textarea:disabled {
    border-bottom-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.24);
}

.pure-material-textfield-filled > input:disabled + span,
.pure-material-textfield-filled > textarea:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
}

/* Faster transition in Safari for less noticable fractional font-size issue */
@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .pure-material-textfield-filled > input,
        .pure-material-textfield-filled > input + span,
        .pure-material-textfield-filled > input + span::after,
        .pure-material-textfield-filled > textarea,
        .pure-material-textfield-filled > textarea + span,
        .pure-material-textfield-filled > textarea + span::after {
            transition-duration: 0.1s;
        }
    }
}
</style>
