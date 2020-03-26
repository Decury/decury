<template>
<div class="wrapper">
  <table id="grades">
    <tr>
      <th>Lesson</th>
      <th colspan="3">Grades</th>
      <th>Total</th>
    </tr>
    <tr>
      <td>Maths</td>
      <td>15</td>
      <td>55</td>
      <td>95</td>
      <td>55</td>
    </tr>
    <tr>
      <td>Maths</td>
      <td>15</td>
      <td>55</td>
      <td>95</td>
      <td>55</td>
    </tr>
    <tr>
      <td>Maths</td>
      <td>15</td>
      <td>55</td>
      <td>95</td>
      <td>55</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheet/_variables.scss';

.wrapper {
    width: 100%;
    padding-top: 40px;
}
#grades {
  border-collapse: collapse;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

#grades td, #grades th {
  border: 1px solid #ddd;
  padding: 8px;
}

#grades tr:nth-child(even){
  background-color: $white;
}

#grades tr:hover {
  background-color: $whitebox;
}

#grades th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: $primary-color;
  color: white;
}

@media only screen and (max-width: 600px) {
  #grades {
    width: 100%;
    margin-left: 0;
  }
}
</style>
