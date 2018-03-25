<template>
  <div id="app">
    <nav class="navbar fixed-top " style="background-color: #AED09E;">
        <span id="nav_text" class="navbar-brand mb-0 mx-auto unselectable">ChatterBox</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  name: 'App',
  components :{
    Login
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

.navbar-brand {
    color: rgb(248, 248, 248);
    text-shadow: 2px 1px rgba(215, 212, 219, 0.979);
    font-family: 'Pacifico';
    font-size: 170%;
    font-weight: 300;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: "/src/images/background.jpg";
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
