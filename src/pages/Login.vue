<template>
    <div id="login">
        <div class="upper-container">
          <h1>Login</h1>
        </div>
        <div class="lower-container">
          <input type="text" name="username" v-model="input.username" placeholder="Username" /> </br>
          <input type="password" name="password" v-model="input.password" placeholder="Password" /> </br>
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
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
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
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        transition: 0.3s;
        border-radius: 5px;
        display: block;
        text-align: center;
        background-color: $white;
        margin-top: 100px;
        margin-bottom: -25px;
        box-shadow: 0px 2px 24px 0px rgba(88, 69, 164, 0.11);
    }

    .upper-container {
        height: 80px;
        width: 100%;
        background: $primary-color;
        display: block;
        border-radius: 5px;
    }

    .lower-container {
        text-align: center;
        background: $white;
        padding-top: 10px;
        box-shadow: 0px 2px 24px 0px rgba(88, 69, 164, 0.11);
        margin: 10px;
    }

    .lower-container input {
        outline: 0;
        background: $whitebox;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 5px;
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
    }

    .lower-container button:hover {

    }

    h1 {
      color: $white;
      padding-top: 10px;
      padding-left: 5px;
    }

    @media only screen and (max-width: 886px) {
      #login {
        width: 70%;
      }
    }

    @media screen and (max-width: 600px) {
      #login {
        width: 95%;
      }
    }
</style>
