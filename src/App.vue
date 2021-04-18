<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',


  data() {
    return{
      
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
@import "./assets/styles/Variables.css";
html, body {
  font-family: 'Poppins', sans-serif;
}
#app{
  font-family: 'Poppins', sans-serif;
}
</style>
