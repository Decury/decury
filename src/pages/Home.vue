<template>
<div>
  <div class="classroomdiv">
    <h1 style="margin-bottom:-40px; margin-top:50px;">Your Classroom</h1>
    <h3 style="margin-bottom:-30px; margin-top:45px; color:grey; ">Overview of your classroom.</h3>
    <div class="row1">
      <div class="card">
        <div class="container">
          <h4><b>10-C</b></h4>
          <p>18 students</p>
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
              <h2>Mathematics</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Physics</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Italian</h2>
              <p>Veronica Felli</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Latin</h2>
              <p>Veronica Felli</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>World History</h2>
              <p>Defne Kut</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Turkish History</h2>
              <p>Defne Kut</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Turkish Literature</h2>
              <p>Maria Pia Di Prospero</p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h2>Geography</h2>
              <p>Hamise Aydurmuş</p>
            </div>
          </div>
        </div>


      </div>
      <div class="assignmentsdiv">
        <h1 style="margin-bottom:-40px; margin-top:50px;">Your Assignments</h1>
        <h3 style="margin-bottom:-30px; margin-top:45px; color:grey;">Upcoming classwork you're assigned to.</h3>
        <div class="row1">


          <div class="row">
            <div class="column">
              <div class="card">..</div>
            </div>
            <div class="column">
              <div class="card">..</div>
            </div>
            <div class="column">
              <div class="card">..</div>
            </div>
            <div class="column">
              <div class="card">..</div>
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
      grade: '10'
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    display: block;
}

h2 {
    width: 100%;
    font-size: 2vw;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
    padding: 2px 16px;
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
a {
    font-size: 15px;
    color: $gray;
}

* {
    box-sizing: border-box;
    margin-bottom: 50px;
}

.column {
    float: left;
    width: 25%;
    padding: 0 10px;
}

.row {
    margin: 0 -5px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    margin-bottom: 20px;
}

@media only screen and (max-width: 886px) {
    .column {
        float: left;
        width: 50%;
        padding: 0 10px;
    }

    h2 {
        font-size: calc(1.5em + 0.5vw);
    }

}

@media screen and (max-width: 600px) {
    .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
}
</style>
