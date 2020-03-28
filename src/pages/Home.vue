<template>
<div>
    <h1 style="margin-bottom:-40px; margin-top:50px;">Your Classroom</h1>
    <h3 style="margin-bottom:-30px; margin-top:45px; color:grey; ">Overview of your classroom.</h3>
    <div class="row1">
      <div class="profile-grid">
        <div class="card">
          <div class="upper-container">
            <div class="profile">
              <img src="../assets/user.jpg" alt="Profile">
            </div>
          </div>
          <div class="lower-container">
            <h2 class="profileh">{{ name }} {{ surname }}</h2>
            <p>{{ classroom }} - Student</p>
          </div>
        </div>
        <div class="card">
          <p class="classroomheading">Classroom:</p>
          <h1 class="classroomh">{{ classroom }}</h1>
          <ul class="minimenu">
            <li><router-link to="/Streams">Streams</router-link></li>
            <li><router-link to="/Classroom">Classroom</router-link></li>
            <li><router-link to="/Homework">Homework</router-link></li>
        </div>
      </div>

    </div>
    <div class="classesdiv">
      <h1 style="margin-bottom:-40px; margin-top:50px;">Your Lessons</h1>
      <h3 style="margin-bottom:-30px; margin-top:45px; color:grey; ">Lessons you take.</h3>
      <div class="row1">

        <div class="row">
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Mathematics</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Physics</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Italian</h2>
              <p>Veronica Felli</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Latin</h2>
              <p>Veronica Felli</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">World History</h2>
              <p>Defne Kut</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Turkish History</h2>
              <p>Defne Kut</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Turkish Literature</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2 class="gridh2">Geography</h2>
              <p>Hamise Aydurmuş</p>
            </div>
          </div>
        </div>


      </div>
      <div class="assignmentsdiv">
        <h1 style="margin-bottom:-40px; margin-top:50px;">Your Assignments</h1>
        <h3 style="margin-bottom:-30px; margin-top:45px; color:grey;">Upcoming classwork you're assigned to.</h3>
        <div class="row1">


          <div class="horizontalrow">
            <div class="scrollablecolumn">
              <div class="scrollablecard">..</div>
            </div>
            <div class="scrollablecolumn">
              <div class="scrollablecard">..</div>
            </div>
            <div class="scrollablecolumn">
              <div class="scrollablecard">..</div>
            </div>
            <div class="scrollablecolumn">
              <div class="scrollablecard">..</div>
            </div>
          </div>


        </div>
        <div class="teachersdiv">
          <h1 style="margin-bottom:-40px; margin-top:50px;">Your Teachers</h1>
          <h3 style="margin-bottom:-30px; margin-top:45px; color:grey;">Teachers in classes you participate.</h3>
          <div class="row1">
            <div class="teacherslist">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
              <img src="../assets/user.jpg" alt="Avatar" class="avatar">
            </div>
          </div>
        </div>

      </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      name: 'Tan Siret',
      surname: 'Akıncı',
      room: 'A',
      grade: '10',
      id: '123'
    }
  },

  computed: {
    classroom: function() {

      return (this.grade + "/" + this.room);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/_variables.scss';

.row1 {
    margin-top: 50px;
}

.box {
    position: relative;
    display: flex;
    width: 100%;
    height: 80px;
    background: $whitebox;
    box-shadow: 5px 5px 5px #888888;
}

.teacherslist {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    text-align: center;
    display: flex;
    justify-content: left;
}

.classroomheading {
  font-size: 10px;
  position: absolute;
}

.classroomh {
    font-size: 50px;
    text-align: left;
}

.minimenu {
  text-align: left;
}
.minimenu li {
    list-style-type: none;
    text-decoration: none;
    display: inline;
    margin: 0 10px;
}

.avatar {
    vertical-align: middle;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    display: inline-block;
}

.card {
    transition: 0.3s;
    border-radius: 5px;
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: $white;
    margin-bottom: -25px;
}

h2 {
    font-size: calc(1.5em + 0.5vw);
}

.gridh2 {
    width: 100%;
    font-size: 2vw;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.upper-container {
  height: 80px;
  background: $primary-color;
  display: block;
}

.lower-container {
  background: $white;
  display: inline-block;
  height: 50px;
}

.lower-container h2{
  padding-top: 0;
}

.profile {
    margin-left: auto;
    margin-right: auto;
    padding-top: 25px;
}

.profile img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
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
a {
    font-size: 15px;
    color: $gray;
}

* {
    box-sizing: border-box;
    margin-bottom: 50px;
}

.profile-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 40px;
}

.column {
    float: left;
    width: 25%;
    padding: 0 10px;
}

.scrollablecolumn {
    float: left;
    min-width: 390px;
    max-width: 390px;
    padding: 0 10px;
}

.row {
    margin: 0 -5px;
}

.horizontalrow {
    margin: 0 -5px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.scrollablecard {
    box-shadow: 0px 2px 7px 0px rgba(88, 69, 164, 0.11);
    padding: 16px;
    text-align: center;
    background-color: $white;
    margin-bottom: 20px;
    max-width: 390;
    min-width: 390;
}

@media only screen and (max-width: 886px) {
    .column {
        float: left;
        width: 50%;
        padding: 0 10px;
    }


    .profile-grid {
      grid-template-columns: 1fr 1,5fr;
      grid-template-rows: 1fr;
    }

    .gridh2 {
        font-size: calc(1.5em + 0.5vw);
    }

    .profileh {
        font-size: calc(0.9em + 0.5vw);
    }
}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
        padding: 10px;
    }
    .profile-grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
}
</style>
