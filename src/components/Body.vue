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

<style scoped>

.profile {
  position: relative;
  width: 100%;
  height: 80px;
  background: gray;
  border-radius: 8%;
}

.user {
  border-radius: 50%;
  height: 50px;
  margin: 15px 5px;
}
</style>
